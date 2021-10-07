import axios from 'axios';

const authApi = (): any => {
  return axios.get('http://localhost:3000/api/auth/login', {
    withCredentials: true,
  });
};

export { authApi };
