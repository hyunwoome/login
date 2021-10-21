import {Request, Response, NextFunction} from 'express';
import {User} from '@src/types';
import {encryptPassword} from '@src/middlewares/bcrypt';
import {createUserService, updateUserService, deleteUserService} from '@src/services/UserService'
import {checkNameForm, checkEmailForm, checkPasswordForm, checkDuplicateEmail} from '@src/validators/UserFormValidator';
import {generateError} from "@src/error/generateError";
import {ERROR_CODE} from "@src/constants";

// ✅ 회원가입
export const createUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {name, email, password, verifyPassword}: User = req.body;
    if (!(await checkDuplicateEmail(email))) {
      checkNameForm(name);
      checkEmailForm(email);
      checkPasswordForm(password, verifyPassword);
      await createUserService({
        name, email,
        password: await encryptPassword(password),
        verifyPassword: await encryptPassword(verifyPassword)
      });
      res.status(200).json({message: '회원가입이 완료되었습니다.'});
    } else generateError(ERROR_CODE.BAD_REQUESTS);
  } catch (error) {
    next(error);
  }
};

// ✅ 사용자 정보 수정
export const updateUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.session.isAuth) {
      const {name, password, verifyPassword}: User = req.body;
      checkNameForm(name);
      checkPasswordForm(password, verifyPassword);
      const user = req.session.user;
      await updateUserService(user, {name, password, verifyPassword});
      req.session.user.name = name;
      req.session.user.password = password;
      req.session.user.verifyPassword = verifyPassword;
      res.status(200).json({message: '정보가 변경되었습니다.'});
    } else generateError(ERROR_CODE.UNAUTHORIZED);
  } catch (error) {
    next(error)
  }
};

// ✅ 회원 탈퇴
export const deleteUserController = async (req: Request, res: Response, next: NextFunction) => {
    try {
      if (req.session.isAuth) {
        const userId = req.session.user._id.toString();
        await deleteUserService(userId);
        req.session.destroy((err) => console.error(err));
        res.send();
      } else generateError(ERROR_CODE.UNAUTHORIZED);
    } catch (error) {
      next(error);
    }
};
