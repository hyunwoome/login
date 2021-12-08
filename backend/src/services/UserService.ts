import { encryptPassword } from '@src/middlewares/bcrypt';
import { User, UserID } from '@src/types';
import { userModel } from '@src/models/UserModel';

export const createUserService = (data: User) => {
  const user = new userModel(data);
  return user.save();
};

export const readUserService = (email: any) => {
  return userModel.findOne({ email });
};

export const emailUserService = (email: any) => {
  return userModel.findOne({ email }).count();
};

export const updateUserService = async (
  session: { _id: { toString: () => string } },
  form: { name: string; password: string; verifyPassword: string }
) => {
  const userId = session._id.toString();
  const name = form.name;
  const password = await encryptPassword(form.password);
  const verifyPassword = await encryptPassword(form.verifyPassword);
  return userModel.findByIdAndUpdate(
    userId,
    { name, password, verifyPassword },
    { new: true }
  );
};

export const deleteUserService = (data: UserID) => {
  console.log(data);
  return userModel.findByIdAndRemove(data);
};
