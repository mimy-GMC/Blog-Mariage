import { Router } from "express";
import * as CommentController  from "../controllers/commentController";
import { AuthMiddleware } from '../middlewares/authMiddleware';

const router = Router();

/*       Création de routes      */     

// Route pour ajouter un commentaire.
router.post('/', AuthMiddleware, CommentController.addComment);

// Route pour récupérer tous les commentaires d'un article
router.get('/:id', CommentController.getComment);

// Route pour modifier un commentaire existant.
router.put('/:id', AuthMiddleware, CommentController.updateComment);

// Route pour supprimer un commentaire
router.delete('/:id', AuthMiddleware, CommentController.deleteComment);

export default router;
