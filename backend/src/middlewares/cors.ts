import cors from 'cors';

const corsOpt = cors({
  origin: 'http://localhost:4000',
  credentials: true,
});

export {corsOpt};