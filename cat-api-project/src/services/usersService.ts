import User from '../models/userModel';

export const getUser = async (username: string, password: string) => {
  return await User.findOne({ username, password });
};

export const registerUser = async (username: string, password: string) => {
  const user = new User({ username, password });
  return await user.save();
};
