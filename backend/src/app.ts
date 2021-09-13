import express from 'express';
import config from './config';
import connectDB from './Loaders/db';
import router from './routes';
import session from './middlewares/session';

const app = express();

const start = async () => {
  try {
    await connectDB();
    app.use(express.urlencoded({ extended: true }));
    app.use(express.json());
    app.use(session());
    app.use(router);
    app.listen(config.PORT, () => {
      console.log(`http://localhost:${config.PORT}: ✅`);
    });
  } catch (error) {
    console.log(error, '서버 시작 오류');
  }
};

start();
