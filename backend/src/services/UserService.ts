import UserModel from '../models/UserModel';
import { IUser } from '../interfaces/IUser';

const createUser = (data: IUser) => {
  const user = new UserModel(data);
  return user.save();
};

export default createUser;
