import express from 'express';
import cors from 'cors';
import config from './config';
import connectDB from './Loaders/db';
import router from './routes';
import session from './middlewares/session';
import generalErrorHandler from './error/generalErrorHandler';
const app = express();

const start = async () => {
  try {
    await connectDB();
    app.use(cors({ origin: true, credentials: true }));
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(session());
    app.use(router);
    app.use(generalErrorHandler);
    app.listen(config.PORT, () => {
      console.log(`http://localhost:${config.PORT}: ✅`);
    });
  } catch (error) {
    console.error(error);
  }
};

start();
