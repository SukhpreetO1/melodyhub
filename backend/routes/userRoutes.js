import { express, registerUser, loginUser, isAuth, userProfile, logoutUser, test } from "./allRoutes.js";

const router = express.Router();

router.get('/', test);
router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', isAuth, userProfile);
router.get('/logout', isAuth, logoutUser);

export default router;