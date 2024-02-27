import { Router } from "express";
import * as UserController from '../controllers/userController';
import { AuthMiddleware } from '../middlewares/authMiddleware';


const router = Router();

router.post('/', AuthMiddleware, UserController.createUser);

export default router;

