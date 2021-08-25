import express from 'express';
import session from 'express-session';
import MongoStore from 'connect-mongo';
import config from '../config';

const app = express();

export default app.use(
  session({
    secret: config.SESSION_SECRET,
    store: MongoStore.create({
      mongoUrl: config.MONGO_URL,
    }),
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 * 24 },
    resave: false,
  }),
);
