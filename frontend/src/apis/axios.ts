import axios from 'axios';

export const baseURL = process.env.NODE_ENV === 'development'
  ? 'http://localhost:3000' : '';

const axiosIns = axios.create({ baseURL, withCredentials: true});

export {axiosIns};
