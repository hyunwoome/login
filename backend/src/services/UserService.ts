import {encryptPassword} from "@src/middlewares/bcrypt";
import {User, UserID} from '@src/types';
import {userModel} from '@src/models/UserModel';

const createUserService = (data: User) => {
  const user = new userModel(data);
  return user.save();
};

const updateUserService = async (session: { _id: { toString: () => string; }; }, form: { name: string; password: string; checkPassword: string; }) => {
  const userId = session._id.toString();
  const name = form.name;
  const password = await encryptPassword(form.password);
  const checkPassword = await encryptPassword(form.checkPassword);
  return userModel.findByIdAndUpdate(userId, {name, password, verifyPassword: checkPassword}, {new: true});
};

const deleteUserService = (data: UserID) => {
  const {userId} = data;
  return userModel.deleteOne({userId});
};

export {
  createUserService,
  updateUserService,
  deleteUserService
};
