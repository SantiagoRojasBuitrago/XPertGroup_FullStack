import { Request, Response } from 'express';
import { getUser, registerUser } from '../services/usersService';

export const loginUserController = async (req: Request, res: Response) => {
  const { username, password } = req.query;
  const user = await getUser(username as string, password as string);
  if (user) {
    res.json(user);
  } else {
    res.status(401).json({ message: 'Invalid credentials' });
  }
};

export const registerUserController = async (req: Request, res: Response) => {
  const { username, password } = req.body;
  const user = await registerUser(username, password);
  res.status(201).json(user);
};
