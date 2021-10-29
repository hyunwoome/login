import {NextFunction, Request, Response} from "express";
import {checkDuplicateEmail} from "@src/validators/UserFormValidator";

export const checkedEmailController = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const {email} = req.body;
    const count = await checkDuplicateEmail(email);
    res.status(200).json({check: count});
  } catch (error) {
    console.error(error)
  }
};