import express from 'express';
import { AuthController, UserController } from '@src/controllers';

const router = express.Router();
router.post('/api/user', UserController.createUser);
router.get('/api/user/:userId', UserController.readUser);
router.get('/api/users', UserController.readUsers);
router.put('/api/user/:userId', UserController.updateUser);
router.delete('/api/user/:userId', UserController.deleteUser);

router.post('/api/auth/login', AuthController.logIn);
router.get('/api/auth/login', AuthController.loggedIn);

export { router };
