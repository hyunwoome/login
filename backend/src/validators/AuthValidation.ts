import errorGenerator from '../error/errorGenerator';
import AuthService from '../services/AuthService';
import bcrypt from 'bcrypt';

const emailFinder = async (email: string) => {
  try {
    const user = await AuthService.findEmail({ email });
    if (user) return user;
    else throw new Error();
  } catch (error) {
    errorGenerator({ msg: '일치하는 이메일이 없습니다.', statusCode: 401 });
  }
};

const comparePassword = async (password: string, userPassword: string) => {
  try {
    const isMatch = await bcrypt.compare(password, userPassword);
    if (!isMatch) throw new Error();
  } catch (error) {
    errorGenerator({ msg: '비밀번호가 다릅니다.', statusCode: 401 });
  }
};

const AuthValidation = {
  emailFinder,
  comparePassword,
};

export default AuthValidation;
