import dotenv from 'dotenv';
dotenv.config();

export default {
  port: process.env.PORT,
  dbPassword: process.env.DB_PASSWORD,
};
