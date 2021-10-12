import {axiosInstance} from "@src/apis/axios";
import {CONST} from '@src/constants';

const loggedApi = (): any => {
  return axiosInstance.post(CONST.API.LOGGED)

}

export {loggedApi};