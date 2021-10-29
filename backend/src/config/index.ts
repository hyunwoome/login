import dotenv from 'dotenv';

dotenv.config();

const config = {
  PORT: process.env.PORT,
  DB_URI: process.env.DB_URI,
  SESSION_SECRET: process.env.SESSION_SECRET,
};

export {config};
