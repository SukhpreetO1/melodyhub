import { jwt, User } from "../routes/allRoutes.js";

export const isAuth = async (req, res, next) => {
    try {
        const AdminCookieName = Object.keys(req.cookies).find(key => req.cookies[key] === req.cookies.admin_token);
        const UserCookieName = Object.keys(req.cookies).find(key => req.cookies[key] === req.cookies.token);
    
        const latest_token = req.cookies.token && req.cookies.token.split('=')[1];
        const adminToken = req.cookies.admin_token && req.cookies.admin_token?.split('=')[1];
    
        if (UserCookieName !== undefined) {
            if (!latest_token) return res.status(403).json({
                message : "Please login."
            })
    
            const decodeToken = jwt.verify(latest_token, process.env.JWT_SECRET, { ignoreExpiration: true });
            if (!decodeToken) return res.status(403).json({
                message : "Token expire. Please login again"
            })
            res.user = User.findById(decodeToken.id);
            next();
        } else if (AdminCookieName !== undefined) {
            if (!adminToken) return res.status(403).json({
                message : "Please login."
            })
    
            const decodeToken = jwt.verify(adminToken, process.env.JWT_SECRET, { ignoreExpiration: true });
            if (!decodeToken) return res.status(403).json({
                message : "Token expire. Please login again"
            })
            res.user = User.findById(decodeToken.id);
            next();
        }
    } catch (error) {
        console.log(error);
        
        res.status(500).json({
            message : "Please login."
        })
    }
}