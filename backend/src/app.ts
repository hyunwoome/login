import express from 'express';
import {corsOpt} from '@src/middlewares/cors';
import {session} from '@src/middlewares/session';
import {config} from '@src/config';
import {connectDB} from '@src/Loaders/db';
import {router} from '@src/routes';
import {generalErrorHandler} from '@src/error/generalErrorHandler';

(async () => {
  try {
    const app = express();
    await connectDB();
    app.use(corsOpt);
    app.use(express.urlencoded({extended: true}));
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
})();
