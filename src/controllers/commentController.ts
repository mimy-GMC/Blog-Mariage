import { Request, Response } from 'express';
import * as CommentService  from '../services/commentService';

// Fonction pour ajouter un commentaire.
export const addComment = async (req: Request, res: Response) => {
    const myComment = req.body;
    try {
        const newComment = await CommentService.addComment(myComment);
        res.status(201).json(newComment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Fonction pour récupérer tous les commentaires d'un article
export const getComment = async (req: Request, res: Response) => {
    const idComment = req.params.id;
    try {
        const comments = await CommentService.getComment(idComment);
        res.status(200).json(comments);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Fonction pour modifier un commentaire existant.
export const updateComment = async (req: Request, res: Response) => {
    const commentId = req.params.id;
    const newComment = req.body;
    try {
        const updatedComment = await CommentService.updateComment(commentId, newComment);
        res.status(200).json(updatedComment);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

// Fonction pour supprimer un commentaire
export const deleteComment = async (req: Request, res: Response) => {
    const id = req.params.id;
    try {
        await CommentService.deleteComment(id);
        res.status(200).json({ message: 'Commentaire supprimé avec succès' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

