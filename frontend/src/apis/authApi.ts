import {axiosInstance} from "@src/apis/axios";

const authApi = (): any => {
  return axiosInstance.get('http://localhost:3000/api/auth/login');
};

export {authApi};
