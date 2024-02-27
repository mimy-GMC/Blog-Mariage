import { AdminBlogModel } from "../databases/models/adminModel"; 

// Fonction pour créer un nouvel article de blog dans la base de données
export const createBlog = async (blogCreate: any) => {
    try {
        const newBlog = await AdminBlogModel.create(blogCreate); 
        return newBlog.save(); 
    } catch (error) {
        throw error;
    }
}

// Fonction pour récupérer tous les articles de blog depuis la base de données
export const getAllBlogArti = async (myBlog: string) => {
    try {
        return await AdminBlogModel.find({myBlog}); 
    } catch (error) {
        throw error;
    }
}

// Fonction pour mettre à jour un article de blog existant dans la base de données
export const updateBlogArti = async (idBlogArti: string, blogArti: any) => {
    try {
        return await AdminBlogModel.findByIdAndUpdate(idBlogArti, blogArti, { new: true }); 
    } catch (error) 
    {
        throw error;
    }
}

// Fonction pour supprimer un article de blog de la base de données
export const deleteBlogArti = async (idBlogArti: string) => {
    try {
        return await AdminBlogModel.findByIdAndDelete(idBlogArti); 
    } catch (error) {
        throw error;
    }
}
