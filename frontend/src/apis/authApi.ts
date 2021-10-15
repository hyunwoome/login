import {axiosIns} from "@src/apis/axios";
import {CONST} from "@src/constants";

interface Auth {
  name?: string;
  email: string;
  password: string;
  checkPassword?: string;
}

const signupApi = ({name, email, password, checkPassword}: Auth): any => {
  return axiosIns.post(CONST.API.SIGN_UP, {
    name,
    email,
    password,
    checkPassword,
  });
};

const loginApi = ({email, password}: Auth): any => {
  return axiosIns.post(CONST.API.LOGIN, {email, password});
};

const logoutApi = (): any => {
  return axiosIns.post(CONST.API.LOGOUT);
};

const deleteApi = (): any => {
  return axiosIns.delete(CONST.API.DELETE);
}

const loggedApi = (): any => {
  return axiosIns.post(CONST.API.LOGGED);
}

export {signupApi, loginApi, logoutApi, deleteApi, loggedApi};
