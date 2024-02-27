import { Router } from "express";
import * as AuthController from '../controllers/authController';
import { AuthMiddleware } from '../middlewares/authMiddleware';

const router = Router();

/*                    Routage             */

// Route pour la connexion
router.post('/login', AuthController.login);

// Route pour la deconnexion
router.post('/logout', AuthMiddleware,  AuthController.logout);

//Route pour le rafraîchissement
router.post('/refreshToken', AuthMiddleware, AuthController.refreshToken);

export default router;

