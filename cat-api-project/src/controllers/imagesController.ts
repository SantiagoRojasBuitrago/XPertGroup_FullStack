import { Request, Response } from 'express';
import { getImagesByBreedId } from '../services/imagesService';

export const getImagesByBreedIdController = async (req: Request, res: Response) => {
  const { breed_id } = req.query;
  const images = await getImagesByBreedId(breed_id as string);
  res.json(images);
};
