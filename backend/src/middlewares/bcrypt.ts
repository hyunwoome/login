import bcrypt from 'bcrypt';

const encryptPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10);
  return bcrypt.hash(password, salt);
};

const compareEncryptPassword = async (password: string, userPassword: string) => {
  return await bcrypt.compare(password, userPassword);
};

export {encryptPassword, compareEncryptPassword};
