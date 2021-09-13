import { Request, Response } from 'express';
import AuthService from '../services/AuthService';
import bcrypt from 'bcrypt';

const logIn = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const user = await AuthService.findEmail({ email });
    if (!user) {
      res.send('존재하지 않는 이메일입니다.');
    } else {
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) res.send('비밀번호가 맞지 않습니다.');
      else res.send(req.session);
    }
  } catch (error) {
    res.send(error);
  }
};

const AuthController = {
  logIn,
};

export default AuthController;
