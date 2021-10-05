import { NextFunction, Request, Response } from 'express';
import { AuthValidation } from '@src/validators';

const logIn = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const user = await AuthValidation.emailFinder(email);
    await AuthValidation.comparePassword(password, user!.password);
    req.session.isAuth = true;
    req.session.email = email;
    res.status(200).json({ message: '로그인 성공' });
  } catch (error) {
    next(error);
  }
};

const loggedIn = (req: Request, res: Response) => {
  if (req.session.isAuth)
    res.send({
      isAuth: true,
      email: req.session.email,
    });
  else
    res.send({
      isAuth: false,
    });
};

const AuthController = {
  logIn,
  loggedIn,
};

export default AuthController;
