import { Request, Response, NextFunction } from 'express';
import UserInterface from '../interfaces/UserInterface';
import bcryptPassword from '../middlewares/bcrypt';
import AuthService from '../services/AuthService';
import UserService from '../services/UserService';

const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password }: UserInterface.IUser = req.body;
    const foundUser = await AuthService.findEmail({ email });
    if (foundUser) res.send('이미 가입한 이메일입니다.');
    else {
      await UserService.createUser({
        name,
        email,
        password: await bcryptPassword(password),
      });
      res.send('회원가입 성공');
    }
  } catch (error) {
    next(error);
  }
};

const readUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    const user = await UserService.readUser({ userId });
    res.send(user);
  } catch (error) {
    res.send(error);
  }
};

const readUsers = async (req: Request, res: Response) => {
  try {
    const users = await UserService.readUsers();
    res.send(users);
  } catch (error) {
    res.send(error);
  }
};

// TODO:
const updateUser = async (req: Request, res: Response) => {};

const deleteUser = async (req: Request, res: Response) => {
  try {
    const { userId } = req.params;
    res.send(await UserService.deleteUser({ userId }));
  } catch (error) {
    res.send(error);
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
