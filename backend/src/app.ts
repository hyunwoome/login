import express, { Application } from 'express';
import config from './config';
import sign from './router/sign';
const app: Application = express();

app.use('/api', sign);

app.listen(config.port, () => {
  console.log(`http://localhost:${config.port} : ✅`);
});
