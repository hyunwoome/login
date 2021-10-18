import mongoose from 'mongoose';
import {User} from '@src/types';

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
    verifyPassword: {
      type: String,
      required: true,
    },
  },
  {timestamps: true},
);

const userModel = mongoose.model<User & Document>('User', UserSchema);

export {userModel};
