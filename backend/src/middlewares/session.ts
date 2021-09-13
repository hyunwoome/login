import sessions from 'express-session';
import MongoStore from 'connect-mongo';
import config from '../config';

const oneDay = 1000 * 60 * 60 * 24;
const session = () =>
  sessions({
    secret: config.SESSION_SECRET!,
    cookie: { maxAge: oneDay },
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({
      mongoUrl: config.DB_URI,
    }),
  });

export default session;
