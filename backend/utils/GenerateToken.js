import { jwt } from '../routes/allRoutes.js';

const GenerateToken = (id, res, roleName) => {
    const token = jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn : '10m',
    });

    if (roleName == "Admin") {
        res.cookie("admin_token", "admin_token=" + token, {
            maxAge: 60 * 60 * 1000,
            // httpOnly : true, 
            sameSite : 'strict',
            // secure: process.env.NODE_ENV === 'production'
        })
    } else {
        res.cookie("token", "token=" + token, {
            maxAge: 60 * 60 * 1000,
            // httpOnly : true, 
            sameSite : 'strict',
            // secure: process.env.NODE_ENV === 'production'
        })
    }
}

export default GenerateToken;