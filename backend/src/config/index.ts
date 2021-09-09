import dotenv from 'dotenv';
dotenv.config();

export default {
  PORT: process.env.PORT,
  DB_URI: process.env.DB_URI,
};
