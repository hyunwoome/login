import { Router } from 'express';
import signUp from '../controllers/SignUpController';
import logIn from '../controllers/LoginController';
const router = Router();

router.post('/api/signup', signUp);
router.post('/api/login', logIn);

export default router;
