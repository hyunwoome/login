import {encryptPassword} from "@src/middlewares/bcrypt";
import {User, UserID, UserInput} from '@src/types';
import {userModel} from '@src/models/UserModel';
import {generateError} from "@src/error/generateError";
import {ERROR_CODE} from "@src/constants";

const createUserService = (data: User) => {
  const user = new userModel(data);
  return user.save();
};

// TODO: 이메일을 통한 유저 정보 가져오기
const readUserService = (email: any) => {
  return userModel.findOne({email});
};

// TODO: 이메일 중복 확인
const emailUserService = (email: any) => {
  return userModel.findOne({email}).count();
}

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
  deleteUserService,
  emailUserService
};
