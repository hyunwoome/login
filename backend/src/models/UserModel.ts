import mongoose from 'mongoose';
import { IUser } from '@src/types';

const UserSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    checkPassword: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export default mongoose.model<IUser & Document>('User', UserSchema);
