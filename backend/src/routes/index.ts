import { Router } from 'express';
import AuthController from '../controllers/AuthController';
import UserController from '../controllers/UserController';
const router = Router();

// User
router.post('/api/user', UserController.createUser);
router.get('/api/user/:userId', UserController.readUser);
router.get('/api/users', UserController.readUsers);
router.put('/api/user/:userId', UserController.updateUser);
router.delete('/api/user/:userId', UserController.deleteUser);

// Auth
router.post('/api/auth/login', AuthController.logIn);

export default router;
