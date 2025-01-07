import { express, allError, protectedRoutesController } from "./allRoutes.js";

const router = express.Router();

router.post('/allErrors', allError);
router.get('/protected-route', protectedRoutesController);

export default router;