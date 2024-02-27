// AdminRepository.ts
import * as AdminRepository from '../repository/adminRepository'; // Importer le modèle de blog

// Fonction pour créer un nouvel article de blog
export const createBlog = async (blogCreate: any) => {
    try {
        const newBlog = await AdminRepository.createBlog(blogCreate); 
        return newBlog.save(); 
    } catch (error) {
        throw new Error('Erreur lors de la création de l\'article de blog');
    }
}

// Fonction pour récupérer tous les articles de blog
export const getAllBlogArti = async (myBlog: string) => {
    try {
        return await AdminRepository.getAllBlogArti(myBlog); 
    }
    catch (error) {
        throw new Error('Erreur lors de la récupération des articles de blog');
    }
}

// Fonction pour mettre à jour un article de blog existant
export const updateBlogArti = async (idBlogArti: string, blogArti: any) => {
    try {
        return await AdminRepository.updateBlogArti(idBlogArti, blogArti); 
    } catch (error) {
        throw new Error('Erreur lors de la mise à jour de l\'article de blog');
    }
}

// Fonction pour supprimer un article de blog
export const deleteBlogArti = async (idBlogArti: string) => {
    try {
        return await AdminRepository.deleteBlogArti(idBlogArti); // Supprimer l'article de blog de la base de données
    } catch (error) {
        throw new Error('Erreur lors de la suppression de l\'article de blog');
    }
}
