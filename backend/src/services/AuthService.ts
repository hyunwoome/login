import { UserInterface } from '@src/interfaces';
import { UserModel } from '@src/models';

const findEmail = (data: UserInterface.IUserInput) => {
  const { email } = data;
  const result = UserModel.findOne({ email });
  return result;
};

const AuthService = {
  findEmail,
};

export default AuthService;
