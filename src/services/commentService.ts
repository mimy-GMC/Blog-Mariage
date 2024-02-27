import * as CommentRepository  from '../repository/commentRepository';

// Fonction pour ajouter un commentaire.
export const addComment = async (myComment: string) => {
    try {
        return await CommentRepository.addComment(myComment);
    } catch (error) {
        throw new Error('Erreur lors de l\'ajout du commentaire.');
    }
}

// Fonction pour récupérer tous les commentaires d'un article
export const getComment = async (IdComment: string) => {
    try {
        return await CommentRepository.getComment(IdComment);
    } catch (error) {
        throw new Error('Erreur lors de la récupération du commentaires.');
    }
}

// Fonction pour modifier un commentaire existant.
export const updateComment = async (commentId: string, newComment: string) => {
    try {
        return await CommentRepository.updateComment(commentId, newComment);
    } catch (error) {
        throw new Error('Erreur lors de la mise à jour du commentaire.');
    }
}

// Fonction pour supprimer un commentaire
export const deleteComment = async (id: string) => {
    try {
       return await CommentRepository.deleteComment(id);
    } catch (error) {
        throw new Error('Erreur lors de la suppression du commentaire.');
    }
}


