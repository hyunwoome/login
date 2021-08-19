import User from '../models/user.model';

const createUser = () => {
  const user = new User();
  return user.save();
};

export default {
  createUser,
};
