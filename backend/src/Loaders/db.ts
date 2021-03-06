import mongoose from 'mongoose';
import {config} from '@src/config';

const connectDB = async () => {
  try {
    await mongoose.connect(`${config.DB_URI}`);
    console.log('MongoDB: ✅');
  } catch (error) {
    console.log(`MongoDB: ❌\n${error}`);
  }
};

export {connectDB};
