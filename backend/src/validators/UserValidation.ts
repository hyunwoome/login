import { errorGenerator } from '@src/error';
import { AuthService } from '@src/services';

const nameChecker = (data: string) => {
  if (data) {
    const removeSpaceName = data.replace(/ /g, '');
    if (removeSpaceName.length < 1) {
      errorGenerator({
        msg: '이름을 두 글자 이상 작성해주세요',
        statusCode: 422,
      });
    }
  } else errorGenerator({ msg: '이름을 작성해주세요.', statusCode: 422 });
};

const emailChecker = (data: string) => {
  if (data) {
    const removeSpaceEmail = data.replace(/ /g, '');
    const format = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (!removeSpaceEmail.length)
      errorGenerator({ msg: '이메일을 작성해주세요.', statusCode: 422 });
    if (!removeSpaceEmail.match(format))
      errorGenerator({ msg: '잘못된 이메일 양식입니다.', statusCode: 422 });
  } else errorGenerator({ msg: '이메일을 작성해주세요.', statusCode: 422 });
};

const passwordChecker = (password: string, checkPassword: string) => {
  if (password && checkPassword) {
    const removeSpacePassword = password.replace(/ /g, '');
    const removeSpaceCheckPassword = checkPassword.replace(/ /g, '');
    if (
      removeSpacePassword.length < 6 ||
      removeSpacePassword.length > 14 ||
      removeSpaceCheckPassword.length < 6 ||
      removeSpaceCheckPassword.length > 14
    )
      errorGenerator({
        msg: '비밀번호는 6글자 이상, 13글자 이하로 작성해주세요.',
        statusCode: 422,
      });
    if (removeSpacePassword !== removeSpaceCheckPassword)
      errorGenerator({
        msg: '두 비밀번호가 다릅니다.',
        statusCode: 422,
      });
  } else {
    errorGenerator({
      msg: '비밀번호를 입력하세요.',
      statusCode: 422,
    });
  }
};

const emailDuplicateChecker = async (email: string) => {
  try {
    const foundEmail = await AuthService.findEmail({ email });
    if (foundEmail) throw new Error();
  } catch (error) {
    errorGenerator({ msg: '중복된 이메일입니다.', statusCode: 409 });
  }
};

const UserValidation = {
  nameChecker,
  emailChecker,
  passwordChecker,
  emailDuplicateChecker,
};

export default UserValidation;
