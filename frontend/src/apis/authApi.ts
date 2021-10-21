import {AxiosInstance} from 'axios'
import {axiosIns} from "@src/apis/axios";
import {API} from "@src/constants";

interface Auth {
  name?: string;
  email: string;
  password: string;
  verifyPassword?: string;
}

export const signupApi = ({name, email, password, verifyPassword}: Auth): Promise<AxiosInstance> => {
  return axiosIns.post(API.SIGN_UP, {name, email, password, verifyPassword});
};

export const loginApi = ({email, password}: Auth): Promise<AxiosInstance> => {
  return axiosIns.post(API.LOGIN, {email, password});
};

export const logoutApi = (): Promise<AxiosInstance> => {
  return axiosIns.post(API.LOGOUT);
};

export const deleteApi = (): Promise<AxiosInstance> => {
  return axiosIns.delete(API.DELETE);
}

export const updateApi = ({name, password, verifyPassword}: Auth): Promise<AxiosInstance> => {
  return axiosIns.put(API.UPDATE, {name, password, verifyPassword: verifyPassword});
}

export const loggedApi = (): Promise<AxiosInstance> => {
  return axiosIns.post(API.LOGGED);
}

export const checkedEmailApi = (email: string): Promise<AxiosInstance> => {
  return axiosIns.post(API.CHECKED_EMAIL, {email})
    .then((res) => res.data.check)
    .catch((error) => console.error(error));
}