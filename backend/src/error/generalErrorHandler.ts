import { Request, Response, NextFunction } from 'express';
import { ErrorWithStatusCode } from './errorGenerator';

const generalErrorHandler = (
  err: ErrorWithStatusCode,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const { message, statusCode } = err;
  res.status(statusCode || 500).json({ message });
};

export default generalErrorHandler;
