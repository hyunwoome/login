import {Request, Response, NextFunction} from 'express';
import {IUser} from '@src/types';
import {bcryptPassword} from '@src/middlewares/bcrypt';
import {
  createUserService,
  updateUserService,
  deleteUserService
} from '@src/services/UserService'
import {
  nameChecker,
  emailChecker,
  passwordChecker,
  emailDuplicateChecker
} from '@src/validators/UserValidation';


const createUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {name, email, password, checkPassword}: IUser = req.body;
    nameChecker(name);
    emailChecker(email);
    passwordChecker(password, checkPassword);
    await emailDuplicateChecker(email);
    await createUserService({
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

const updateUserController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    if (req.session.isAuth) {
      const user = req.session.user;
      const form = req.body;
      const updateUser = await updateUserService(user, form);
      req.session.user.name = updateUser!.name;
      req.session.user.password = updateUser!.password;
      req.session.user.checkPassword = updateUser!.checkPassword;
      res.send();
    } else {
      throw new Error('로그인을 해야합니다.');
    }
  } catch (e) {
    next(e)
  }
};

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
