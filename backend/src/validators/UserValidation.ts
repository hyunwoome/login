import {generateError} from '@src/error/generateError';
import {findEmail} from '@src/services/AuthService';
import {ERROR_CODE} from "@src/constants";


const checkName = (name: string) => {
  if (name) {
    const spaceRemoveName = name.replace(/ /g, '');
    if (spaceRemoveName.length < 1) generateError(ERROR_CODE.BAD_REQUESTS);
  } else {
    generateError(ERROR_CODE.BAD_REQUESTS);
  }
};

const checkEmail = (email: string) => {
  if (email) {
    const spaceRemoveEmail = email.replace(/ /g, '');
    const format = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
    if (!spaceRemoveEmail.match(format)) generateError(ERROR_CODE.BAD_REQUESTS);
  } else generateError(ERROR_CODE.BAD_REQUESTS);
};

const checkDuplicateEmail = async (email: string) => {
  const foundEmail = await findEmail({email});
  if (foundEmail) generateError(ERROR_CODE.DUPLICATE);
};

const checkPassword = (password: string, verifyPassword: string) => {
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

export {
  checkName,
  checkEmail,
  checkDuplicateEmail,
  checkPassword
};
