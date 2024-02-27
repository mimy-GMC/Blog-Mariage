import { Request, Response } from 'express';
import * as UserService from '../services/userService';

export const createUser = async (req: Request, res: Response) => {
    const user: { username: string, email: string, password: any } = req.body;
    try {
        const newUser = await UserService.createUser(user);
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ message: 'Erreur lors de la création de l\'utilisateur' });
    }
}
