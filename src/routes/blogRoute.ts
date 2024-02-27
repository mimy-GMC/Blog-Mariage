
import { Router } from "express";
import * as BlogController from '../controllers/blogController';

const router = Router();

/*            Création de routes           */

// Route pour créer un nouvel article
router.post('/', BlogController.createNews);

// Route pour récupérer tous les articles.
router.get('/', BlogController.getAllNews);

// Route pour récupérer un article par son ID.
router.get('/:id', BlogController.getNewsById);

// Route pour modifier un article existant.
router.put('/:id', BlogController.updateNews);

// Route pour supprimer un article.
router.delete('/:id', BlogController.deleteNews);

// Route pour recommander des articles similaires.
router.get('/:id/similar', BlogController.getSimilarNews);

export default router;
