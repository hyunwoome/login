import {Request, Response, NextFunction} from 'express';
import {User} from '@src/types';
import {encryptPassword} from '@src/middlewares/bcrypt';
import {createUserService, updateUserService, deleteUserService} from '@src/services/UserService'
import {checkName, checkEmail, checkPassword, checkDuplicateEmail} from '@src/validators/UserValidation';

// 회원가입 (완료)
const createUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {name, email, password, verifyPassword}: User = req.body;
    checkName(name);
    checkEmail(email);
    await checkDuplicateEmail(email);
    checkPassword(password, verifyPassword);
    await createUserService({
      name, email,
      password: await encryptPassword(password),
      verifyPassword: await encryptPassword(verifyPassword)
    });
    res.status(200).json({message: '회원가입이 완료되었습니다.'});
  } catch (error) {
    next(error);
  }
};

// 사용자 정보 수정
const updateUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.session.isAuth) {
      const user = req.session.user;
      const form = req.body;
      const updateUser = await updateUserService(user, form);
      req.session.user.name = updateUser!.name;
      req.session.user.password = updateUser!.password;
      req.session.user.checkPassword = updateUser!.verifyPassword;
      res.send();
    } else {
      throw new Error('로그인을 해야합니다.');
    }
  } catch (e) {
    next(e)
  }
};

// 회원 탈퇴
const deleteUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.session.isAuth) {
      const userId = req.session.user._id.toString();
      await deleteUserService(userId);
      req.session.destroy((err) => console.error(err));
      res.send();
    } else {
      throw new Error('로그인을 해야합니다.');
    }
  } catch (error) {
    next(error);
  }
};

export {
  createUserController,
  updateUserController,
  deleteUserController
};
