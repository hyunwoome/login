import { Request, Response, Router } from 'express';
const router: Router = Router();

router.get('/login', (req: Request, res: Response) => {
  res.send('auth router');
});

export default router;
