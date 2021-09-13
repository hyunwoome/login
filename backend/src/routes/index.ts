import { Router } from 'express';
import AuthController from '../controllers/AuthController';
import UserController from '../controllers/UserController';
const router = Router();

// User
router.post('/api/user', UserController.createUser);
router.get('/api/:userId', UserController.readUser);
router.get('/api/users', UserController.readUsers);
router.put('/api/:userId', UserController.updateUser);
router.delete('/api/:userId', UserController.deleteUser);

// Auth
router.post('/api/login', AuthController.logIn);

export default router;
