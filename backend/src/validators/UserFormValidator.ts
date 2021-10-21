import {generateError} from '@src/error/generateError';
import {compareEncryptPassword} from '@src/middlewares/bcrypt';
import {emailUserService} from '@src/services/UserService';
import {ERROR_CODE} from "@src/constants";

export const checkNameForm = (name: string) => {
  if (name) {
    const spaceRemoveName = name.replace(/ /g, '');
    const format = /^[가-힇]+$/;
    if (!spaceRemoveName.match(format)) generateError(ERROR_CODE.BAD_REQUESTS);
    if (spaceRemoveName.length <= 1 || spaceRemoveName.length >= 10) {
      generateError(ERROR_CODE.BAD_REQUESTS);
    }
  } else {
    generateError(ERROR_CODE.BAD_REQUESTS);
  }
};

export const checkEmailForm = (email: string) => {
  if (email) {
    const spaceRemoveEmail = email.replace(/ /g, '');
    const format = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!spaceRemoveEmail.match(format)) generateError(ERROR_CODE.BAD_REQUESTS);
  } else generateError(ERROR_CODE.BAD_REQUESTS);
};

export const checkPasswordForm = (password: string, verifyPassword: string) => {
  if (password && verifyPassword) {
    const spaceRemovePassword = password.replace(/ /g, '');
    const spaceRemoveVerifiedPassword = verifyPassword.replace(/ /g, '');
    if (spaceRemovePassword.length < 6 || spaceRemovePassword.length > 14
      || spaceRemoveVerifiedPassword.length < 6 || spaceRemoveVerifiedPassword.length > 14
    ) generateError(ERROR_CODE.BAD_REQUESTS);
    if (spaceRemovePassword !== spaceRemoveVerifiedPassword) generateError(ERROR_CODE.BAD_REQUESTS);
  } else {
    generateError(ERROR_CODE.BAD_REQUESTS);
  }
};

export const checkDuplicateEmail = async (email: string) => {
  return emailUserService(email);
}

export const comparePassword = async (password: string, userPassword: string) => {
  const isMatch = await compareEncryptPassword(password, userPassword);
  return isMatch ? isMatch : generateError(ERROR_CODE.BAD_REQUESTS);
};
