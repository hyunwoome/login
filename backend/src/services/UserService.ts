import {encryptPassword} from "@src/middlewares/bcrypt";
import {User, UserID, UserInput} from '@src/types';
import {userModel} from '@src/models/UserModel';
import {generateError} from "@src/error/generateError";
import {ERROR_CODE} from "@src/constants";

const createUserService = (data: User) => {
  const user = new userModel(data);
  return user.save();
};

const readUserService = async (data: UserInput) => {
  const {email} = data;
  const result = await userModel.findOne({email}).exec()
  return result || generateError(ERROR_CODE.BAD_REQUESTS);
};

const updateUserService = async (session: { _id: { toString: () => string; }; }, form: { name: string; password: string; verifyPassword: string; }) => {
  const userId = session._id.toString();
  const name = form.name;
  const password = await encryptPassword(form.password);
  const verifyPassword = await encryptPassword(form.verifyPassword);
  return userModel.findByIdAndUpdate(userId, {name, password, verifyPassword}, {new: true});
};

const deleteUserService = (data: UserID) => {
  const {userId} = data;
  return userModel.deleteOne({userId});
};

export {
  createUserService,
  readUserService,
  updateUserService,
  deleteUserService
};
