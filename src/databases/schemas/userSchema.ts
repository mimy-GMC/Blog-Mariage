import mongoose from 'mongoose';

// Définition du schéma de l'utilisateur
export const UserSchema = new mongoose.Schema({
    username: { 
        type: String, 
        required: true,
        unique: true
    },
    email: { 
        type: String, 
        required: true, 
        unique: true 
    },
    password: { 
        type: String, 
        required: true 
    }
});
