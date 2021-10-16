import express from 'express';
import {createUserController, updateUserController, deleteUserController} from '@src/controllers/UserController'
import {logInController, logOutController, loggedController} from '@src/controllers/AuthController'

const router = express.Router();
router.post('/api/user', createUserController);
router.put('/api/user', updateUserController);
router.delete('/api/user', deleteUserController);

router.post('/api/auth/login', logInController);
router.post('/api/auth/logout', logOutController);
router.post('/api/auth/logged', loggedController);

export {router};
