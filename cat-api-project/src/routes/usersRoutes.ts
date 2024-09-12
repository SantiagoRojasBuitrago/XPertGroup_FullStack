import { Router } from 'express';
import { loginUserController, registerUserController } from '../controllers/usersController';

const router = Router();

router.get('/login', loginUserController);
router.post('/register', registerUserController);

export default router;
