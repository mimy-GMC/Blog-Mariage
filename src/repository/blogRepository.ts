import { NewBlogModel } from '../databases/models/blogModel';

export const createNews = async (newCreate: any) => {
    try {
        const createdArti = await NewBlogModel.create(newCreate);
        return createdArti;
    } catch (error) 
    { 
        throw error;
    }
}

export const getAllNews = async (page: number, limit: number, filters: any) => {
    try {
        const skip = (page - 1) * limit;
        const listArti = await NewBlogModel.find(filters).skip(skip).limit(limit);
        return listArti;
    } catch (error) 
    { 
        throw error;
    }
}

export const getNewsById = async (idArti: string) => {
    try {
        const myArti = await NewBlogModel.findById({_id: idArti});
        return myArti;
    } catch (error) 
    { 
        throw error;
    }
}

export const updateNews = async (artId: string, newBlog: any) => {
    try {
        const myNewArti = await NewBlogModel.findByIdAndUpdate(artId, newBlog, { new: true });
        return myNewArti;
    } catch (error) 
    { 
        throw error;
    }
}

export const deleteNews = async (newId: string) => { 
    try {
        return await NewBlogModel.findByIdAndDelete(newId);
    } catch (error) 
    { 
        throw error;
    }
}

export const getSimilarNews = async (idSinilar: string) => {
    try {
        // Récupérer l'article spécifique par son ID
        const currentNews = await NewBlogModel.findById(idSinilar);

        // Extraire la catégorie de l'article spécifique
        const currentCategory = currentNews.category;

        // Rechercher d'autres actualités ayant la même catégorie (sauf celle actuellement consultée)
        const similarNews = await NewBlogModel.find({ category: currentCategory, _id: { $ne: idSinilar } })
        // Limiter le nombre de recommandations à 5 par exemple
        .limit(5) 
        // Convertir les résultats en objet JSON
        .lean(); 

        return similarNews;
    } catch (error) {
        throw error;
    }
}

