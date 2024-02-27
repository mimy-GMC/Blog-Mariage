
import * as UserRepository from '../repository/userRepository';
import * as JwtUtil from '../utils/jwtUtil';


// Fonction pour créer un utilisateur.
export const createUser = async (user: any) => {
    const ExistingMailUser = await UserRepository.findUserByEmail(user.email);

    const ExistingUser = await UserRepository.findOne( user.username);

    if (ExistingMailUser) throw new Error('utilisateur existe déjà');
    if (ExistingUser) throw new Error ('Nom d\'utilisateur ou mot de passe incorrect'); 
        
    user.password = JwtUtil.hashPassword(user.password);
    try {
        const newUser = await UserRepository.createUser(user);
        return newUser.save();
    } catch (error) {
        throw error;
    }
}

// Fonction pour récupérer un utilisateur par son email.
export const getUserByEmail = async (email: string) => {
    try {
        const userMail = await UserRepository.findUserByEmail(email);
        return userMail;
    } catch (error) {
        throw error;
    }
}

// Fonction pour récupérer un utilisateur par son nom.
export const getUserByName = async (username: string) => {
    try {
        const userName = await UserRepository.findOne(username);
        return userName;
    } catch (error) {
        throw error;
    }
}