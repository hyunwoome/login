import UserInterface from '../interfaces/UserInterface';
import UserModel from '../models/UserModel';

const findEmail = (data: UserInterface.IUserInput) => {
  const { email } = data;
  return UserModel.findOne({ email });
};

const AuthService = {
  findEmail,
};

export default AuthService;
