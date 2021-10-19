import {NextFunction, Request, Response} from 'express';
import {comparePassword} from '@src/validators/UserFormValidation';
import {generateError} from "@src/error/generateError";
import {readUserService} from "@src/services/UserService";
import {ERROR_CODE} from "@src/constants";

// ✅ 로그인
const logInController = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.session.isAuth) {
    try {
      const {email, password} = req.body;
      const user = await readUserService({email});
      await comparePassword(password, user!.password);
      req.session.isAuth = true;
      req.session.user = user;
      res.status(200).json({message: '로그인 되었습니다.'});
    } catch (error) {
      next(error);
    }
  } else generateError(ERROR_CODE.BAD_REQUESTS);
};

// ✅ 로그아웃
const logOutController = (req: Request, res: Response, next: NextFunction) => {
  if (req.session.isAuth) {
    try {
      req.session.destroy((err => null));
      res.send();
    } catch (error) {
      next(error);
    }
  } else generateError(ERROR_CODE.UNAUTHORIZED);
}

// ✅ 로그인 확인
const loggedController = (req: Request, res: Response, next: NextFunction) => {
  if (req.session.isAuth) res.send(req.session);
  else generateError(ERROR_CODE.UNAUTHORIZED);
};

export {logInController, logOutController, loggedController};
