import { NextFunction, Request, Response } from 'express';
import { AuthValidation } from '@src/validators';

const logIn = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const user = await AuthValidation.emailFinder(email);
    await AuthValidation.comparePassword(password, user!.password);
    req.session.isAuth = true;
    req.session.name = user?.name;
    req.session.email = user?.email;
    res.status(200).json({ message: '로그인 성공' });
  } catch (error) {
    next(error);
  }
};

const AuthController = {
  logIn,
};

export default AuthController;
