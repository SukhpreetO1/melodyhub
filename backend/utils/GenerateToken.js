import { jwt } from '../routes/allRoutes.js';

const GenerateToken = (id, res) => {
    const token = jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn : '10m',
    });

    res.cookie("token", token, {
        maxAge: 60 * 60 * 1000,
        httpOnly : true, 
        sameSite : 'strict',
        // secure: process.env.NODE_ENV === 'production'
    })
}

export default GenerateToken;