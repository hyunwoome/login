import {Request, Response, NextFunction} from 'express';
import {ErrorWithStatusCode} from '@src/error/errorGenerator';

const generalErrorHandler = (
  err: ErrorWithStatusCode,
  req: Request,
  res: Response,
) => {
  const {message, statusCode} = err;
  res.status(statusCode || 500).json({message});
};

export {generalErrorHandler};
