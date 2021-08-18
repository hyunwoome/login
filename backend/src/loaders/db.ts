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
      console.log('Connected to MongoDB Atlas');
    })
    .catch((err) => {
      console.log(`Error connecting to th MongoDB Atlas. Error: ${err}`);
    });
}
