import {Request, Response, NextFunction} from 'express';
import {ErrorWithStatusCode} from '@src/error/generateError';

const generalErrorHandler = (
  err: ErrorWithStatusCode,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const {message, statusCode} = err;
  if (statusCode) {
    res.status(statusCode!).json({message});
  } else {
    res.status(500).json({message: 'Internal Server Error'});
  }
};

export {generalErrorHandler};
