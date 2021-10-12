import sessions from 'express-session';
import connectMongodbSession from 'connect-mongodb-session';
import { config } from '@src/config';

declare module 'express-session' {
  export interface SessionData {
    isAuth: boolean;
    email: string;
  }
}

const connectMongoDB = connectMongodbSession(sessions);
const store = new connectMongoDB({
  uri: config.DB_URI!,
  collection: 'session',
})
const oneDay = 1000 * 60 * 60 * 24;
const session = () =>
  sessions({
    name: 'session.id',
    secret: config.SESSION_SECRET!,
    cookie: { maxAge: oneDay },
    resave: false,
    saveUninitialized: false,
    store: store,
  });

export {session};
