import express from 'express';
import { corsOpt } from '@src/middlewares';
import { session } from '@src/middlewares';
import { config } from '@src/config';
import { connectDB } from '@src/Loaders';
import { router } from '@src/routes';
import { generalErrorHandler } from '@src/error';

(async () => {
  try {
    const app = express();
    await connectDB();
    app.use(corsOpt);
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
})();
