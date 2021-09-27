import mongoose from 'mongoose';
import { UserInterface } from '@src/interfaces';
import { UserModel } from '@src/models';

const createUser = (data: UserInterface.IUser) => {
  const user = new UserModel(data);
  const result = user.save();
  return result;
};

const readUser = (data: UserInterface.IUserId) => {
  const { userId } = data;
  const objectId = new mongoose.Types.ObjectId(userId);
  const result = UserModel.findById(objectId);
  return result;
};

const readUsers = () => {
  const result = UserModel.find();
  return result;
};

// TODO:
const updateUser = () => {};

const deleteUser = (data: UserInterface.IUserId) => {
  const { userId } = data;
  const result = UserModel.deleteOne({ userId });
  return result;
};

const UserService = {
  createUser,
  readUsers,
  readUser,
  updateUser,
  deleteUser,
};

export default UserService;
