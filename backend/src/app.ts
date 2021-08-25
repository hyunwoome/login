import express from 'express';
import dotenv from 'dotenv';
import connectDB from './loaders/db';
import routes from './routes';
import session from './middleware/session';
import config from './config';

dotenv.config();

const app = express();
const port = config.PORT || 5000;

// Middleware Register
app.use(session);
app.use('/api', routes);
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`http://localhost:${port} : ✅`);
  connectDB();
});
