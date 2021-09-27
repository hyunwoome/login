import bcrypt from 'bcrypt';

const bcryptPassword = async (password: any) => {
  const salt = await bcrypt.genSalt(10);
  const result = bcrypt.hash(password, salt);
  return result;
};

const bcryptPasswordCompare = async (
  password: string,
  userPassword: string,
) => {
  const result = await bcrypt.compare(password, userPassword);
  return result;
};

export { bcryptPassword, bcryptPasswordCompare };
