import {NextFunction, Request, Response} from 'express';
import {emailFinder, comparePassword} from '@src/validators/AuthValidation';

const logInController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {email, password} = req.body;
    const user = await emailFinder(email);
    await comparePassword(password, user!.password);
    req.session.isAuth = true;
    req.session.user = user;
    res.status(200).json({loginSuccess: true});
  } catch (e) {
    next(e);
  }
};

const logOutController = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.session.isAuth) {
      req.session.destroy((err) => console.error(err));
      res.send();
    } else {
      throw new Error('로그인을 해야합니다.');
    }
  } catch (e) {
    next(e);
  }
}

const loggedController = (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.session.isAuth) {
      res.send(req.session);
    } else {
      throw new Error('로그인을 해야합니다.');
    }
  } catch (e) {
    next(e);
  }
}

export {logInController, logOutController, loggedController};
