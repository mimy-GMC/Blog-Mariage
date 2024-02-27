import { Request, Response } from 'express';
import * as AdminService from '../services/adminService';

// Définir une interface étendant l'interface Request de Express
interface CustomRequest extends Request {
  isAdmin: boolean; // Définir la propriété isAdmin et son type
}
// Fonction pour créer un article d'actualité.
export const createBlogArti = async (req: CustomRequest, res: Response) => {
  const isAdmin = req.isAdmin;
  const blogCreate = req.body;
  try {
    // On vérifie si l'utilisateur est administrateur
    if (!isAdmin) {
      return res.status(403).json({ message: "Accès refusé. Seuls les administrateurs peuvent effectuer cette action." });
    }
    // Si l'utilisateur est un administrateur, la création du blog continue.
    const newBlogArti = await AdminService.createBlog(blogCreate);
    res.status(201).json(newBlogArti);
  } 
  catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Fonction pour lire toutes les articles d'actualité.
export const getAllBlogArti = async (req: Request, res: Response) => {
  const myBlog = req.body;
  try {
    const allBlogArti = await AdminService.getAllBlogArti(myBlog);
    res.status(200).json(allBlogArti);
  } 
  catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const updateBlogArti = async (req: CustomRequest, res: Response) => {
  const isAdmin = req.isAdmin;
  const idBlogArti = req.params.id;
  const blogArti = req.body;
  try {
    // Vérifie si l'utilisateur est administrateur
    if (!isAdmin) {
      return res.status(403).json({ message: "Accès refusé. Seuls les administrateurs peuvent effectuer cette action." });
    }
    // Si l'utilisateur est un administrateur, la mise à jour du blog continue.
    const updatedBlogArti = await AdminService.updateBlogArti(idBlogArti, blogArti);
    res.status(200).json(updatedBlogArti);
  } 
  catch (error) {
    res.status(500).json({ message: error.message });
  }
}

export const deleteBlogArti = async (req: CustomRequest, res: Response) => {
  const isAdmin = req.isAdmin;
  const idBlogArti = req.params.id;
  try {
    // Vérifie si l'utilisateur est administrateur
    if (!isAdmin) {
      return res.status(403).json({ message: "Accès refusé. Seuls les administrateurs peuvent effectuer cette action." });
    }
    // Si l'utilisateur est un administrateur, la suppression du blog continue.
    await AdminService.deleteBlogArti(idBlogArti);
    res.status(200).json({ message: 'Article supprimé avec succès' });
  } 
  catch (error) {
    res.status(500).json({ message: error.message });
  }
}
