import config from '../config';
import { createConnection } from 'typeorm';

export const connectDB = async () => {
  try {
    await createConnection({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: config.dbPassword,
      database: 'login',
      synchronize: true,
      entities: ['src/model/*.ts'],
    });
    console.log('Connected to MySQL : ✅');
  } catch (error) {
    console.log(error);
    throw new Error('Unable to connect to db');
  }
};
