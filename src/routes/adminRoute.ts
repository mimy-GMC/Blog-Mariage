import { Router } from "express";
import *  as AdminController from '../controllers/adminController';
import { AuthMiddleware } from '../middlewares/authMiddleware';


const router = Router();

/*                    Routage             */

// Route pour créer un nouvel article (accessible uniquement aux admins)
router.post('/blogs', AuthMiddleware, AdminController.createBlogArti);

//Route pour récupérer tous les articles (accessible uniquement aux admins)
router.get('/blogs', AuthMiddleware, AdminController.getAllBlogArti)

// Route pour modifier un article (accessible uniquement aux admins)
router.put('/blogs/:id', AuthMiddleware, AdminController.updateBlogArti);

// Route pour supprimer un article (accessible uniquement aux admins)
router.delete('/blogs/:id', AuthMiddleware, AdminController.deleteBlogArti);

export default router;
