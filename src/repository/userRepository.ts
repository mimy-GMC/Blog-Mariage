import { UserModel } from "../databases/models/userModel";

// Fonction pour créer un utilisateur dans la base de données.
export const createUser = async (user: any) => {
    try {
        const userNew = await UserModel.create(user);
        return userNew.save();
    } catch (error) {
        throw error;
    }
}

// Fonction pour trouver un utilisateur par son adresse e-mail dans la base de données.
export const findUserByEmail = async (email: string) => {
    try {
        return await UserModel.findOne({ email });
    } catch (error) {
        throw error;
    }
}

// Fonction pour trouver un utilisateur par son adresse e-mail dans la base de données.
export const findOne = async (username: string) => {
    try {
        return await UserModel.findOne({ username });
    } catch (error) {
        throw error;
    }
}
