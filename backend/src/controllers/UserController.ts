import {Request, Response, NextFunction} from 'express';
import {IUser} from '@src/types';
import {bcryptPassword} from '@src/middlewares';
import {UserService} from '@src/services';
import {UserValidation} from '@src/validators';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {name, email, password, checkPassword}: IUser = req.body;
    UserValidation.nameChecker(name);
    UserValidation.emailChecker(email);
    UserValidation.passwordChecker(password, checkPassword);
    await UserValidation.emailDuplicateChecker(email);
    await UserService.createUser({
      name,
      email,
      password: await bcryptPassword(password),
      checkPassword: await bcryptPassword(checkPassword),
    });
    res.status(200).json({signupSuccess: true, email});
  } catch (error) {
    next(error);
  }
};

const readUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {userId} = req.params;
    const user = await UserService.readUser({userId});
    res.send(user);
  } catch (error) {
    next(error);
  }
};

const readUsers = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const users = await UserService.readUsers();
    res.send(users);
  } catch (error) {
    next(error);
  }
};

// TODO: 업데이트 구현 예정
const updateUser = async (req: Request, res: Response, next: NextFunction) => {

};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.session.isAuth) {
      const userId = req.session.user._id.toString();
      const deleteUser = await UserService.deleteUser(userId);
      req.session.destroy((err) => console.error(err));
      res.send();
    } else {
      throw new Error('로그인을 해야합니다.');
    }
  } catch (e) {
    next(e);
  }
};

const UserController = {
  createUser,
  readUsers,
  readUser,
  updateUser,
  deleteUser,
};

export default UserController;
