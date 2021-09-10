import bcrypt from 'bcrypt';

const bcryptPassword = async (password: any) => {
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = bcrypt.hash(password, salt);
  return hashedPassword;
};

export default bcryptPassword;
