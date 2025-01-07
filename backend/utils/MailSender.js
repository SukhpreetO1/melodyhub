import { nodemailer, dotenv } from "../routes/allRoutes.js";
dotenv.config();

const Transporter = nodemailer.createTransport({
    // service: 'gmail',
    // auth: {
    //     user: process.env.EMAIL_USER,
    //     pass: process.env.EMAIL_PASS,
    // },
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
        user: process.env.SMTP_USERNAME,
        pass: process.env.SMTP_PASSWORD,
    },
});

export const sendPasswordResetEmail = async (userEmail, emailBody, subject) => {
    const mailOptions = {
        from: process.env.SMTP_FROM,
        to: userEmail,
        subject: subject,
        text: emailBody
    };

    try {
        await Transporter.sendMail(mailOptions);
        return true;
    } catch (error) {
        throw new Error('Error sending email');
    }
};