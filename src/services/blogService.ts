import * as BlogRepository from '../repository/blogRepository';

// Fonction pour créer un nouvel article d'actualité.
export const createNews = async (newCreate: any) => { 
  try {
    const article = await BlogRepository.createNews(newCreate); 
    return article;
  } catch (error) {
    throw error;
  }
}

// Fonction pour récupérer tous les articles.
export const getAllNews = async (page: number, limit: number, filters: any) => {
  try {
    const artiTotal = await BlogRepository.getAllNews(page, limit, filters);
    return artiTotal;
  } catch (error) {
    throw error;
  }
}

// Fonction pour récupérer un article par son ID
export const getNewsById = async (idArti: string) => {
  try {
    const artiById = await BlogRepository.getNewsById(idArti); 
    if (!artiById) throw new Error('Article introuvable'); 
    return artiById;
  } catch (error) {
    throw error;
  }
}

// Fonction pour modifier un article.
export const updateNews = async (artId: string, newBlog: any) => {
  try {
    const updatedArti = await BlogRepository.updateNews(artId, newBlog); 
    if (!updatedArti) throw new Error('Article introuvable, mise à jour error'); 
    return updatedArti;
  } catch (error) {
    throw error;
  }
}

// Fonction pour supprimer un article.
export const deleteNews = async (newId: string) => {
  try {
    await BlogRepository.deleteNews(newId); 
    return { message: 'Article supprimé avec succès' };
  }
  catch (error) {
    throw error;
  }
}

// Fonction pour recommander des articles similaires
export const getSimilarNews = async (idSinilar: string) => {
    try {
        const recommendedNews = await BlogRepository.getSimilarNews(idSinilar);
        return recommendedNews;
    } catch (error) {
        throw error;
    }
}
