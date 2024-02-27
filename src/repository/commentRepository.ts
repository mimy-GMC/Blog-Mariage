import { CommentModel } from "../databases/models/commentModel";

// Fonction pour ajouter un commentaire dans la base de données.
export const addComment = async (myComment: string) => {
    try {
        const newComment = await CommentModel.create(myComment);
        return newComment.save();
    } catch (error) {
        throw error;
    }
}

// Fonction pour récupérer tous les commentaires d'un article dans la base de données.
export const getComment = async (IdComment: string) => {
    try {
        return await CommentModel.find({IdComment});
    } catch (error) {
        throw error;
    }
}

// Fonction pour mettre à jour un commentaire existant dans la base de données.
export const updateComment = async (commentId: string, newComment: string) => {
    try {
        return await CommentModel.findByIdAndUpdate(commentId, { myComment: newComment }, { new: true });
    } catch (error) {
        throw error;
    }
}

// Fonction pour supprimer un commentaire de la base de données.
export const deleteComment = async (id: string) => {
    try {
        return await CommentModel.findByIdAndDelete(id);
    } catch (error) {
        throw error;
    }
}
