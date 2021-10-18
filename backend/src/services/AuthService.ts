import {UserInput} from '@src/types';
import {userModel} from '@src/models/UserModel';

const findEmail = (data: UserInput) => {
  const { email } = data;
  return userModel.findOne({email});
};

export {findEmail};
