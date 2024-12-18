import { jwt } from '../routes/allRoutes.js';

const GenerateToken = (id, res) => {
    const token = jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn : '10m',
    });

    res.cookie("token", token, {
        maxAge: 10 * 60 * 1000,
        httpOnly : true, 
        sameSite : 'strict'
    })
}

export default GenerateToken;