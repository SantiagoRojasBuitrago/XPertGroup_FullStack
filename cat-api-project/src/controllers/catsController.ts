import { Request, Response } from 'express';
import { getBreeds, getBreedById, searchBreeds } from '../services/catsService';

export const getBreedsController = async (req: Request, res: Response) => {
  const breeds = await getBreeds();
  res.json(breeds);
};

export const getBreedByIdController = async (req: Request, res: Response) => {
  const { breed_id } = req.params;
  const breed = await getBreedById(breed_id);
  res.json(breed);
};

export const searchBreedsController = async (req: Request, res: Response) => {
  const { q } = req.query;
  if (typeof q !== 'string') {
    return res.status(400).json({ error: 'Invalid query parameter' });
  }
  try {
    console.log('Query parameter:', q); 
    const breeds = await searchBreeds(q);
    res.json(breeds);
  } catch (error) {
    console.error('Error in searchBreedsController:', error);
    res.status(500).send('Internal Server Error');
  }
};
