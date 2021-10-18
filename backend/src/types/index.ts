export interface User {
  name: string;
  email: string;
  password: string;
  verifyPassword: string;
  date?: Date;
}

export interface UserInput {
  email: string;
  password?: string;
}

export interface UserID {
  userId: string;
}
