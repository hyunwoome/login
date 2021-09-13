import mongoose from 'mongoose';
import UserInterface from '../interfaces/UserInterface';

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
  },
  { timestamps: true },
);

export default mongoose.model<UserInterface.IUser & Document>(
  'User',
  UserSchema,
);
