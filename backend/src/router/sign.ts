import { Request, Response, Router } from 'express';
const router: Router = Router();

router.get('/sign', (req: Request, res: Response) => {
  res.send('sign router');
});

export default router;
