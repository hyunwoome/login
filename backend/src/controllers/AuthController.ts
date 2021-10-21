import {NextFunction, Request, Response} from 'express';
import {checkDuplicateEmail, comparePassword} from '@src/validators/UserFormValidator';
import {generateError} from "@src/error/generateError";
import {readUserService} from "@src/services/UserService";
import {ERROR_CODE} from "@src/constants";

// ✅ 로그인
export const logInController = async (req: Request, res: Response, next: NextFunction) => {
  if (!req.session.isAuth) {
    try {
      const {email, password} = req.body;
      if (await checkDuplicateEmail(email)){
        const user = await readUserService(email);
        await comparePassword(password, user!.password);
        req.session.isAuth = true;
        req.session.user = user;
        res.status(200).json({message: '로그인 되었습니다.'});
      } else generateError(ERROR_CODE.BAD_REQUESTS);
    } catch (error) {
      next(error);
    }
  } else generateError(ERROR_CODE.BAD_REQUESTS);
};

// ✅ 로그아웃
export const logOutController = (req: Request, res: Response, next: NextFunction) => {
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
export const loggedController = (req: Request, res: Response, next: NextFunction) => {
  if (req.session.isAuth) res.send(req.session);
  else generateError(ERROR_CODE.UNAUTHORIZED);
};

// ✅ 이메일 확인
export const checkedEmailController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {email} = req.body;
    const count = await checkDuplicateEmail(email);
    res.status(200).json({check: count});
  } catch (error) {
    console.error(error)
  }

}