import { Request, Response } from 'express';
import * as AuthService from '../services/authService';

export const login = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const tokens = await AuthService.login(email, password);
    res.status(200).json(tokens);
  } catch (error) {
    console.error("Erreur sur login:", error);
    res.status(500).json({ message: 'Erreur lors de l\'authentification' });
  }
}


export const logout = async (req: Request, res: Response) => {
  const token = req.headers.authorization.replace('Bearer ', '');
  const refreshToken = typeof req.headers.refresh_token === 'string' ? req.headers.refresh_token.replace('Bearer ', '') : '';

  if (!token || !refreshToken) {
    return res.status(400).json('No token or refresh token provided');
  }
  try {
        await AuthService.logout(token, refreshToken);
        res.status(200).json({ message: 'Déconnexion réussie' });
    } catch (error) {
        console.error("Error during logout:", error);
        res.status(500).json({ message: 'Erreur lors de la déconnexion' });
    }
}

// refresh token
export const refreshToken = async (req: Request, res: Response) => {
  const { refresh } = req.body;
  try {
    const userToken = await AuthService.refreshToken(refresh);
    res.status(200).json(userToken);
  } catch (error) {
    res.status(500).json(error.toString());
  }
}