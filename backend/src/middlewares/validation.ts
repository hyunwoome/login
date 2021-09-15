import errorGenerator from '../error/errorGenerator';

const nameChecker = (data: string) => {
  if (data) {
    const removeSpaceName = data.replace(/ /g, '');
    if (removeSpaceName.length <= 1) {
      throw new Error('이름을 작성해주세요.');
    }
  } else {
    // TODO:
    // throw new Error('이름을 입력하세요.');
    errorGenerator({ statusCode: 422 });
  }
};

const emailChecker = (data: string) => {
  const removeSpaceEmail = data.replace(/ /g, '');
  const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (!removeSpaceEmail.length) throw new Error('이메일을 작성해주세요.');
  if (!removeSpaceEmail.match(format))
    throw new Error('잘못된 이메일 양식입니다.');
};

const passwordChecker = (password: string, checkPassword: string) => {
  const removeSpacePassword = password.replace(/ /g, '');
  const removeSpaceCheckPassword = checkPassword.replace(/ /g, '');
  if (
    removeSpacePassword.length < 6 ||
    removeSpacePassword.length > 14 ||
    removeSpaceCheckPassword.length < 6 ||
    removeSpaceCheckPassword.length > 14
  )
    throw new Error('비밀번호는 6글자 이상, 13글자 이하로 작성해주세요.');
  if (removeSpacePassword !== removeSpaceCheckPassword)
    throw new Error('비밀번호를 바르게 입력하세요');
};

const validator = {
  nameChecker,
  emailChecker,
  passwordChecker,
};

export default validator;
