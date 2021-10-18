import {Request, Response, NextFunction} from 'express';
import {ErrorWithStatusCode} from '@src/error/generateError';

const generalErrorHandler = (
  err: ErrorWithStatusCode,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {message, statusCode} = err;
  res.status(statusCode!).json({message} || {message: 'Internal Server Error'});
};

export {generalErrorHandler};
