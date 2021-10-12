import { NextFunction, Request, Response } from 'express';
import { AuthValidation } from '@src/validators';

const logIn = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const user = await AuthValidation.emailFinder(email);
    await AuthValidation.comparePassword(password, user!.password);
    req.session.isAuth = true;
    req.session.email = email;
    console.log(req.session);
    res.status(200).json({ loginSuccess: true, email });
  } catch (error) {
    next(error);
  }
};

const logOut = (req: Request, res: Response, next: NextFunction) => {
  console.log(req.sessionID);
}

const AuthController = {
  logIn,
  logOut,
};

export default AuthController;
