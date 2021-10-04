import axios from 'axios';

const AuthApi = () => {
  axios
    .get('http://localhost:3000/api/auth/login', { withCredentials: true })
    .then((res) => console.log(res.data))
    .catch((err) => console.log(err));
};

export { AuthApi };
