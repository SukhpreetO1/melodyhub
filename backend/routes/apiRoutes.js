import { express, allError } from "./allRoutes.js";

const router = express.Router();

router.post('/allErrors', apiRoutesController);
router.get('/protected-route', apiRoutesController);

export default router;