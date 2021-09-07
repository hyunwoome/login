import mongoose from 'mongoose';
import config from '../config';

export const connect = () => {
  const uri: any = config.MONGO_URI;
  mongoose
    .connect(uri)
    .then(() => console.log('connect'))
    .catch((error) => {
      console.log(error);
    });
};
