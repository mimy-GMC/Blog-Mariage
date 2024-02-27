import { Request, Response } from 'express';
import * as BlogService from '../services/blogService';

// Fonction pour créer un nouvel article d'actualité.
export const createNews = async (req: Request, res: Response) => { 
  const newCreate = req.body;
  try {
    const createdNew = await BlogService.createNews(newCreate);
    res.status(201).json(createdNew);
  } catch (error) 
  {
    res.status(500).json({ message: error.message });
  }
}

//Fonction pour récupérer toutes les actualités avec pagination et filtres.
export const getAllNews = async (req: Request, res: Response) => {

  const { page = 1, limit = 10, category, celebrantType, location } = req.query;
  const filters = { category, celebrantType, location };
  try {
    const allNews = await BlogService.getAllNews(parseInt(page.toString()), parseInt(limit.toString()), filters);
    res.status(200).json(allNews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Fonction pour récupérer un article par son ID
export const getNewsById = async (req: Request, res: Response) => {
  const idArti = req.params.id;
  try {
    const newById = await BlogService.getNewsById(idArti);
    if (!newById) return res.status(404).json({ message: 'Article introuvable' });
    res.status(200).json(newById);
  } catch (error) 
  {
    res.status(500).json({ message: error.message });
  }
}

// Fonction pour modifier un article.
export const updateNews = async (req: Request, res: Response) => {
  const artId = req.params.id;
  const newBlog = req.body;
  try {
    const updatedNew = await BlogService.updateNews(artId, newBlog);
    if (!updatedNew) return res.status(404).json({ message: 'Article introuvable' });
    res.status(200).json(updatedNew);
  } catch (error) 
  {
    res.status(500).json({ message: error.message });
  }
}

// Fonction pour supprimer un article.
export const deleteNews = async (req: Request, res: Response) => {
  const newId = req.params.id;
  try {
    return await BlogService.deleteNews(newId);
  } catch (error) 
  {
    res.status(500).json({ message: error.message });
  }
}

// Fonction pour recommander des articles similaires
export const getSimilarNews = async (req: Request, res: Response) => {
  const idSinilar = req.params.id;
  try {
    const recommendedNews = await BlogService.getSimilarNews(idSinilar);
    res.status(200).json(recommendedNews);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}
