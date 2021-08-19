import express from 'express';
import dotenv from 'dotenv';
import connectDB from './loaders/db';
import routes from './routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(express.json()); // json parser
app.use(express.urlencoded({ extended: false })); // url parser

app.listen(port, () => {
  console.log(`http://localhost:${port} : ✅`);
  connectDB();
  app.use('/api', routes);
});
