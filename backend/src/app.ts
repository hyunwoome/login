import express from 'express';
import dotenv from 'dotenv';
import connectDB from './loaders/db';
import routes from './routes';

dotenv.config();
connectDB();

const app = express();
const port = process.env.PORT || 5000;

app.use('/api', routes);
app.listen(port, () => console.log(`http://localhost:${port} : ✅`));
