import { jwt } from "../routes/allRoutes.js";

export const isAuth = async (req, res, next) => {
    try {       
        const token = req.cookies.token();
        if (!token) return res.status(403).json({
            message : "Please login."
        })

        const decodeToken = jwt.verify(token, process.env.JWT_SECRET)
        if (!decodeToken) return res.status(403).json({
            message : "Token expire. Please login again"
        })

        res.user = User.findById(decodeToken.id);
        next();
    } catch (error) {
        res.status(500).json({
            message : "Please login."
        })       
    }
}