import { express, registerUser, loginUser, isAuth, userProfile, logoutUser, connectedBackend, forgotPassword } from "./allRoutes.js";

const router = express.Router();

router.get('/', connectedBackend);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.post('/forgot_password', forgotPassword);
router.get('/profile', isAuth, userProfile);
router.post('/logout', isAuth, logoutUser);

export default router;