import { Router } from 'express';
import { getBreedsController, getBreedByIdController, searchBreedsController } from '../controllers/catsController';

const router = Router();

router.get('/breeds/search', searchBreedsController);

router.get('/breeds/:breed_id', getBreedByIdController);

router.get('/breeds', getBreedsController);

export default router;
