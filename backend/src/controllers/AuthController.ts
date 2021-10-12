import {NextFunction, Request, Response} from 'express';
import {AuthValidation} from '@src/validators';

const logIn = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {email, password} = req.body;
    const user = await AuthValidation.emailFinder(email);
    await AuthValidation.comparePassword(password, user!.password);
    req.session.isAuth = true;
    req.session.email = email;
    res.status(200).json({loginSuccess: true, email});
  } catch (error) {
    next(error);
  }
};

const logOut = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.session.isAuth) {
      req.session.destroy((err) => console.error(err));
      res.status(200).json({loginSuccess: false});
    } else {
      throw new Error('세션이 없습니다');
    }
  } catch(err) {
    next(err)
  }
}

const AuthController = {
  logIn,
  logOut,
  logged,
};

export default AuthController;
