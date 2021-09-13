import { Request, Response, NextFunction } from 'express';
import { UserService } from '../services';
import { IUser } from '../interfaces/IUser';
import bcrypt from 'bcrypt';

const logIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await UserService.findEmail({ email });
    if (!user) {
      res.send('존재하지 않는 이메일입니다.');
    } else {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) res.send('비밀번호가 맞지 않습니다.');
      else res.send(req.session);
    }
  } catch (error) {
    console.log(error);
  }
};

export default logIn;
