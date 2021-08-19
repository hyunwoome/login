import express from 'express';
import LoginRouter from './login.route';

const router = express.Router();

router.use('/login', LoginRouter);

export default router;
