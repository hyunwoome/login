import { IUserInput } from '@src/types';
import { UserModel } from '@src/models';

const findEmail = (data: IUserInput) => {
  const { email } = data;
  const result = UserModel.findOne({ email });
  return result;
};

const AuthService = {
  findEmail,
};

export default AuthService;
