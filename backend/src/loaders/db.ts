import mongoose from 'mongoose';
import config from '../config';

const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

export default function connectDB(): void {
  mongoose
    .connect(config.MONGO_URL, connectionParams)
    .then(() => {
      console.log('MongoDB Atlas : ✅');
    })
    .catch((err) => {
      console.log(`MongoDB Atlas : ${err}`);
    });
}
