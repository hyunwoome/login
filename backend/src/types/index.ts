export interface IUser {
  name: string;
  email: string;
  password: string;
  checkPassword: string;
  date?: Date;
}

export interface IUserInput {
  email: string;
  password?: string;
}

export interface IUserId {
  userId: string;
}
