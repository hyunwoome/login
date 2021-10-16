import {bcryptPassword} from "@src/middlewares/bcrypt";
import {IUser, IUserId} from '@src/types';
import {userModel} from '@src/models/UserModel';

const createUserService = (data: IUser) => {
  const user = new userModel(data);
  return user.save();
};

const updateUserService = async (session: { _id: { toString: () => string; }; }, form: { name: string; password: string; checkPassword: string; }) => {
  const userId = session._id.toString();
  const name = form.name;
  const password = await bcryptPassword(form.password);
  const checkPassword = await bcryptPassword(form.checkPassword);
  return userModel.findByIdAndUpdate(userId, {name, password, checkPassword}, {new: true});
};

const deleteUserService = (data: IUserId) => {
  const {userId} = data;
  return userModel.deleteOne({userId});
};

export {
  createUserService,
  updateUserService,
  deleteUserService
};
