import express from 'express';
import {createUserController, updateUserController, deleteUserController} from '@src/controllers/UserController'
import {logInController, logOutController, loggedController} from '@src/controllers/LoginController'
import {checkedEmailController} from '@src/controllers/ValidController'
const router = express.Router();

// User
router.post('/api/user', createUserController);
router.put('/api/user', updateUserController);
router.delete('/api/user', deleteUserController);

// Login
router.post('/api/login', logInController);
router.post('/api/logout', logOutController);
router.post('/api/logged', loggedController);

// Valid
router.post('/api/email', checkedEmailController);

export {router};
