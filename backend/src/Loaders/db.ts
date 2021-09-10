import mongoose from 'mongoose';
import config from '../config';

export const connectDB = () => {
  mongoose
    .connect(`${config.DB_URI}`)
    .then(() => {
      console.log('MongoDB : ✅');
    })
    .catch((error) => {
      console.log('Error!', error);
    });
};
