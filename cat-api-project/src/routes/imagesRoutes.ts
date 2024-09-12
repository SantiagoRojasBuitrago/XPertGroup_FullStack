import { Router } from 'express';
import { getImagesByBreedIdController } from '../controllers/imagesController';

const router = Router();

router.get('/imagesbybreedid/:breed_id', getImagesByBreedIdController);

export default router;
