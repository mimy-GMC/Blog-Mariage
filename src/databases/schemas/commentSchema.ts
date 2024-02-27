import mongoose from 'mongoose';

// Définition du schéma du commentaire
export const CommentSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Users', // Référence à la collection des utilisateurs
        required: true
    },
    blogId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Articles', // Référence à la collection des articles
        required: true
    },
    comment: { 
        type: String, 
        required: true 
    }
});
