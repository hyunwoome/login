import express, { Application } from 'express';
import config from './config';
import sign from './router/sign';
import { connectDB } from './loader/db';
const app: Application = express();

app.use('/api', sign);

connectDB();
app.listen(config.port, () => {
  console.log(`http://localhost:${config.port} : ✅`);
});
