import { UserInterface } from '@src/interfaces';
import { UserModel } from '@src/models';

const findEmail = (data: UserInterface.IUserInput) => {
  const { email } = data;
  return UserModel.findOne({ email });
};

const AuthService = {
  findEmail,
};

export default AuthService;
