import cors from 'cors';

const corsOpt = cors({
  origin: 'http://localhost:3000',
  credentials: true,
});

export {corsOpt};
