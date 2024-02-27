import jwt from "jsonwebtoken";
import { jwtConfig } from "../configs/jwtConfig";
import bcrypt from 'bcrypt';

// Fonction pour générer un jeton d'accès
export const generateAccessToken = (user: any) => {
    return jwt.sign(user, jwtConfig.secret, { expiresIn: jwtConfig.expiresIn });
};

// Fonction pour générer un jeton de rafraîchissement
export const generateRefreshToken = async (user: any) => {
    return jwt.sign(user, jwtConfig.refreshSecret, { expiresIn: jwtConfig.refreshExpiresIn });
};

// Fonction pour décoder un jeton d'accès
export const decodeAccessToken = (token: string) => {
    try {
        const decodedToken = jwt.verify(token, jwtConfig.secret);
        return decodedToken;
    } catch (error) {
        return null;
    }
};

// Fonction pour vérifier un jeton de rafraîchissement
export const verifyRefreshToken = async (refreshToken: string) => {
    try {
        const payload = jwt.verify(refreshToken, jwtConfig.refreshSecret);
        return payload;
    } catch (error) {
        throw new Error('Invalid refresh token');
    }
};

// Fonction pour décoder un jeton de rafraîchissement
export const decodeRefreshToken = (token: string) => {
    try {
        const decodedToken = jwt.verify(token, jwtConfig.refreshSecret);
        return decodedToken;
    } catch (error) {
        return null;
    }
};

// Fonction pour hacher un mot de passe
export const hashPassword = (password: string) => {
    const saltRounds = 10;
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(password, salt);
    return hashedPassword;
};

// Fonction pour comparer un mot de passe avec son hachage
export const comparePassword = (password: string, hashedPassword: string) => {
    return bcrypt.compareSync(password, hashedPassword);
};
