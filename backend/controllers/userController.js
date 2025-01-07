import TryCatch from "../utils/TryCatch.js";
import { sendPasswordResetEmail } from "../utils/MailSender.js";
import { bcrypt, GenerateToken, jwt, Role, User } from "../routes/allRoutes.js";

export const connectedBackend = (req, res) => {
    return res.json({
        message: "Backend is working."
    });
};

export const registerUser = TryCatch(async (req, res) => {
    const { name, email, mobile_number, date_of_birth, password, confirm_password } = req.body;

    let userEmail = await User.findOne({ email });
    if (userEmail) return res.status(400).json({
        message: "User already exists with this email address."
    })
    
    let userMobileNumber = await User.findOne({ mobile_number });
    if (userMobileNumber) return res.status(400).json({
        message: "User already exists with this mobile number."
    })

    if (password !== confirm_password) return res.status(400).json({
        message: "Passwords do not match."
    })

    const hashPassword = await bcrypt.hash(password, 10);
    const userRole = await Role.findOne({ name: "User" });

    let user = await User.create({
        name, 
        email, 
        mobile_number,
        date_of_birth,
        role_id: userRole._id,
        password: hashPassword,
    });

    GenerateToken(user._id, res);

    res.status(200).json({
        user, 
        message : 'User created successfully'
    })
});

export const loginUser = TryCatch(async (req, res) => {
    const { email, mobile_number, password } = req.body;

    let user;
    let authType;
    
    if (email) {
        authType = 'email address';
        user = await User.findOne({ email });
    } else if (mobile_number) {
        authType = 'mobile number';
        user = await User.findOne({ mobile_number });
    }
    
    if (!user) return res.status(400).json({
        message: `User not found with this ${authType}.`
    })
    
    const comparePassword = await bcrypt.compare(password, user.password);
    if (!comparePassword) return res.status(400).json({
        message: 'Password do not match with our database.'
    })

    const roleName = await Role.findById(user.role_id);

    GenerateToken(user._id, res);

    res.status(200).json({
        user, 
        roleName: roleName.name, 
        message : 'User logged in successfully'
    })
});

export const userProfile = TryCatch(async (req, res) => {
    const user = await User.findById(req.user._id);
    res.json (user);
});

export const logoutUser = TryCatch(async (req, res) => {
    res.cookie("token", "", { maxAge: 0 });
    res.json({
        message: "Logout sucessfully."
    });
});

export const forgotPassword = TryCatch( async (req, res) => {
    const { email } = req.body;
    let user;
    let authType;

    if (email) {
        authType = 'email address';
        user = await User.findOne({ email });
    }

    if (!user) return res.status(400).json({
        message: `User not found with this email address.`
    })

    try {
        const token = jwt.sign({ id: user._id.toString().slice(0, 8) }, process.env.JWT_SECRET, {
            expiresIn: '10m',
        });        
        const link = `${process.env.FRONTEND_URL}reset_password?token=${token}`;
        const subject = 'Password Reset Request';
        const emailBody = `Hello ${user.name},\n\n
            We received a request to reset your password for your account. If you made this request, please follow the link below to securely reset your password.\n\n
            Reset Your Password: ${link}\n\n
            This link will expire in 10 minutes, so please make sure to reset your password before then.\n\n
            If you didn't request a password reset, no action is needed. Your password will remain the same, and your account will remain secure.\n\n
            If you have any concerns or believe this request was made in error, please reach out to our support team immediately.\n\n
            Thank you,\n
            The ${process.env.APP_NAME} Team`;

        const emailSent = await sendPasswordResetEmail(email, emailBody, subject);

        if (emailSent) {
            return res.status(200).json({
                message: 'Password reset email sent successfully.',
            });
        }

        return res.status(500).json({
            message: 'Error sending password reset email.',
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message || 'An unexpected error occurred.',
        });
    }
});