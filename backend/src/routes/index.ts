import express from 'express';
import {createUserController, updateUserController, deleteUserController} from '@src/controllers/UserController'
import {logInController, logOutController, loggedController, checkedEmailController} from '@src/controllers/AuthController'

const router = express.Router();
router.post('/api/user', createUserController);
router.put('/api/user', updateUserController);
router.delete('/api/user', deleteUserController);
router.post('/api/email', checkedEmailController);

router.post('/api/login', logInController);
router.post('/api/logout', logOutController);
router.post('/api/logged', loggedController);

export {router};
