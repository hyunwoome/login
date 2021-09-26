import { Request, Response, NextFunction } from 'express';
import UserInterface from '../interfaces/UserInterface';
import bcryptPassword from '../middlewares/bcrypt';
import UserService from '../services/UserService';
import UserValidation from '../validators/UserValidation';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password, checkPassword }: UserInterface.IUser =
      req.body;
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
    res.status(200).json({ message: '회원가입 성공' });
  } catch (error) {
    next(error);
  }
};

const readUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.params;
    const user = await UserService.readUser({ userId });
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
const updateUser = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {};

const deleteUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { userId } = req.params;
    res.send(await UserService.deleteUser({ userId }));
  } catch (error) {
    next(error);
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
