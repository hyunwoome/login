import cors from 'cors';
import {config} from '@src/config';

const corsOpt = cors({
  origin: 'http://localhost:4000',
  credentials: true,
});

export {corsOpt};
