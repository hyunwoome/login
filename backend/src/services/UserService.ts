import UserInterface from '../interfaces/UserInterface';
import UserModel from '../models/UserModel';

const createUser = (data: UserInterface.IUser) => {
  const user = new UserModel(data);
  return user.save();
};

const readUser = (data: UserInterface.IUserId) => {
  const { userId } = data;
  return UserModel.findOne({ userId });
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
