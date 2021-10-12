import {axiosInstance} from "@src/apis/axios";
import {CONST} from '@src/constants';

const logoutApi = (): any => {
  return axiosInstance
    .post(
      CONST.API.LOGOUT)
    .then((res) => res.data)
    .catch((err) => console.log(err));
};

export {logoutApi};
