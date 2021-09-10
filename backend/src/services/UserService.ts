import { IUser, IUserInput } from '../interfaces/IUser';
import UserModel from '../models/UserModel';

const createUser = (data: IUser) => {
  const user = new UserModel(data);
  return user.save();
};

const findEmail = (data: IUserInput) => {
  const { email } = data;
  return UserModel.findOne({ email });
};

export default {
  createUser,
  findEmail,
};
