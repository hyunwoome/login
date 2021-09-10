import express from 'express';
import config from './config';
import { connectDB } from './Loaders/db';
import routes from './routes';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

app.listen(config.PORT, () => {
  connectDB();
  console.log(`http://localhost:${config.PORT} : ✅`);
});
