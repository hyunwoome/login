import { Request, Response, NextFunction } from 'express';
import bcryptPassword from '../middlewares/bcrypt';
import { IUser } from '../interfaces/IUser';
import { UserService } from '../services';

const signUp = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { name, email, password }: IUser = req.body;
    const foundUser = await UserService.findEmail({ email });
    if (foundUser) res.send('이미 가입한 이메일입니다.');
    else {
      await UserService.createUser({
        name,
        email,
        password: await bcryptPassword(password),
      });
      res.send('signup ok!');
    }
  } catch (error) {
    next(error);
  }
};

export default signUp;
