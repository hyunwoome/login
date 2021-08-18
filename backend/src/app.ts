import dotenv from 'dotenv';
if (process.env.NODE_ENV !== 'production') dotenv.config();
import express from 'express';
import connectDB from './loaders/db';

connectDB();

const startServer = () => {
  const app = express();
  const port = process.env.PORT;
  app.get('/', (req, res) => {
    res.status(200).send('ok!');
  });
  app.listen(port, () => console.log(`http://localhost:${port} ✅`));
};

startServer();
