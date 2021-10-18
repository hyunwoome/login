import {generateError} from '@src/error/generateError';
import {compareEncryptPassword} from '@src/middlewares/bcrypt';
import {findEmail} from '@src/services/AuthService';
import {ERROR_CODE} from "@src/constants";

const checkEmail = async (email: string) => {
  const user = await findEmail({email});
  return user ? user : generateError(ERROR_CODE.DUPLICATE);
};

const comparePassword = async (password: string, userPassword: string) => {
  const isMatch = await compareEncryptPassword(password, userPassword);
  return isMatch ? isMatch : generateError(ERROR_CODE.BAD_REQUESTS);
};

export {checkEmail, comparePassword};
