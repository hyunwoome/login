import {NextFunction, Request, Response} from 'express';
import {AuthValidation} from '@src/validators';

const logIn = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {email, password} = req.body;
    const user = await AuthValidation.emailFinder(email);
    await AuthValidation.comparePassword(password, user!.password);
    req.session.isAuth = true;
    req.session.user = user;
    res.status(200).json({loginSuccess: true});
  } catch (e) {
    next(e);
  }
};

const logOut = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.session.isAuth) {
      req.session.destroy((err) => console.error(err));
    } else {
      throw new Error('로그인을 해야합니다.');
    }
  } catch (e) {
    next(e);
  }
}

const logged = (req: Request, res: Response, next: NextFunction) => {
  try {
    console.log(req.session);
    if (req.session.isAuth) {
      res.send(req.session.user);
    } else {
      throw new Error('로그인을 해야합니다.');
    }
  } catch (e) {
    next(e);
  }
}

const AuthController = {
  logIn,
  logOut,
  logged,
};

export default AuthController;
