import cors from 'cors';
import { config } from '@src/config';

const corsOpt = cors({
  origin: config.FRONT_DEPLOY_URI || ['http://localhost:4000'],
  credentials: true,
});

export {corsOpt};
