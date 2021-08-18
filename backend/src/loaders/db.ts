import mongoose from 'mongoose';

const connectionParams = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};

export default function connectDB(): void {
  mongoose
    .connect(process.env.MONGO_URL, connectionParams)
    .then(() => {
      console.log('MongoDB Atlas : ✅');
    })
    .catch((err) => {
      console.log(`MongoDB Atlas : ${err}`);
    });
}
