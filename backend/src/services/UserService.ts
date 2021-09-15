import mongoose from 'mongoose';
import UserInterface from '../interfaces/UserInterface';
import UserModel from '../models/UserModel';

const createUser = (data: UserInterface.IUser) => {
  const user = new UserModel(data);
  return user.save();
};

const readUser = (data: UserInterface.IUserId) => {
  const { userId } = data;
  const objectId = new mongoose.Types.ObjectId(userId);
  return UserModel.findById(objectId);
};

const readUsers = () => {
  return UserModel.find();
};

// TODO:
const updateUser = () => {};

const deleteUser = (data: UserInterface.IUserId) => {
  const { userId } = data;
  return UserModel.deleteOne({ userId });
};

const UserService = {
  createUser,
  readUsers,
  readUser,
  updateUser,
  deleteUser,
};

export default UserService;
