import bcrypt from 'bcrypt';

const bcryptPassword = async (password: any) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = bcrypt.hash(password, salt);
  return hashedPassword;
};

const bcryptPasswordCompare = async (
  password: string,
  userPassword: string,
) => {
  const isMatch = await bcrypt.compare(password, userPassword);
  return isMatch;
};

export { bcryptPassword, bcryptPasswordCompare };
