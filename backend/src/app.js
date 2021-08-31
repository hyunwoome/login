const express = require('express');
const config = require('./config');
const sign = require('./router/sign');
const app = express();
const router = express.Router();

app.use('/api', sign);

app.listen(config.port, () => {
  console.log(`http://localhost:${config.port} : ✅`);
});
