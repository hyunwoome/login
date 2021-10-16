import {IUserInput} from '@src/types';
import {userModel} from '@src/models/UserModel';

const findEmail = (data: IUserInput) => {
  const { email } = data;
  return userModel.findOne({email});
};

export {findEmail};
