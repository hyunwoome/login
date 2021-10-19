import {AxiosInstance} from 'axios'
import {axiosIns} from "@src/apis/axios";
import {API} from "@src/constants";

interface Auth {
  name?: string;
  email: string;
  password: string;
  verifyPassword?: string;
}

const signupApi = ({name, email, password, verifyPassword}: Auth): Promise<AxiosInstance> => {
  return axiosIns.post(API.SIGN_UP, {name, email, password, verifyPassword});
};

const loginApi = ({email, password}: Auth): Promise<AxiosInstance> => {
  return axiosIns.post(API.LOGIN, {email, password});
};

const logoutApi = (): Promise<AxiosInstance> => {
  return axiosIns.post(API.LOGOUT);
};

const deleteApi = (): Promise<AxiosInstance> => {
  return axiosIns.delete(API.DELETE);
}

const updateApi = ({name, password, verifyPassword}: Auth): Promise<AxiosInstance> => {
  return axiosIns.put(API.UPDATE, {name, password, verifyPassword: verifyPassword});
}

const loggedApi = (): Promise<AxiosInstance> => {
  return axiosIns.post(API.LOGGED);
}

export {
  signupApi, loginApi,
  logoutApi, deleteApi,
  updateApi, loggedApi
};
