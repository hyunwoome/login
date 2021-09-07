import express from 'express';
import config from './config';
import { connect } from './loader/db';

const app = express();

app.listen(config.PORT, () => {
  connect();
  console.log(`http://localhost:${config.PORT}`);
});
