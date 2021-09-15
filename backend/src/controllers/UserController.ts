import { Request, Response, NextFunction } from 'express';
import UserInterface from '../interfaces/UserInterface';
import bcryptPassword from '../middlewares/bcrypt';
import AuthService from '../services/AuthService';
import UserService from '../services/UserService';
import validator from '../middlewares/validation';
import errorGenerator from '../error/errorGenerator';

// 1. 이름, 이메일, 패스워드 필수 체크 (DB에서 체크)
// 2. 이름은 1글자 이상 (유효성 검사) (OK)
// 3. 이메일 양식 확인 (유효성 검사) (OK)
// 4. 이메일 중복 확인 (DB에서 체크)
// 5. 2차 패스워드 동일 여부 확인 (유효성 검사) (OK)
// 6. 패스워드 6자 이상 확인 (유효성 검사) (OK)
const createUser = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password, checkPassword }: UserInterface.IUser =
      req.body;
    validator.nameChecker(name);
    validator.emailChecker(email);
    validator.passwordChecker(password, checkPassword);
    const foundUser = await AuthService.findEmail({ email });
    if (foundUser) errorGenerator({ statusCode: 409 });
    else {
      await UserService.createUser({
        name,
        email,
        password: await bcryptPassword(password),
        checkPassword: await bcryptPassword(checkPassword),
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
