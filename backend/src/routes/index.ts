import { Router } from 'express';
import UserRouter from './UserRouter';

const router = Router();

router.use('/api', UserRouter);

export default router;
