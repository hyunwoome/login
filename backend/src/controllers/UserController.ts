import express, { Request, Response, NextFunction } from 'express';
import { UserServices } from '../services';

const signUp = (req: Request, res: Response, next: NextFunction) => {
  const { name, email, password } = req.body;
  res.send(`${name}, ${email}, ${password}`);
};

const logIn = (req: Request, res: Response, next: NextFunction) => {
  res.send('/login');
};
export default {
  signUp,
  logIn,
};
