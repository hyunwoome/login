import dotenv from 'dotenv';
if (process.env.NODE_ENV !== 'production') dotenv.config();

import express from 'express';

const startServer = () => {
  const app = express();
  const port = 5000;
  app.get('/', (req, res) => {
    res.status(200).send('ok!');
  });
  app.listen(port, () => console.log(`http://localhost:${port} ✅`));
};

startServer();
