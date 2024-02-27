import * as JwtUtil from '../utils/jwtUtil';
import * as UserService from './userService';
import * as BlackListService from './blackListService';

export const login = async (email: string, password: any) => {
    try {
        const userLogin = await UserService.getUserByEmail(email);
        if (!userLogin) throw new Error('Utilisateur est introuvable');
    
        const PasswordCorrect = JwtUtil.comparePassword(password, userLogin.password)
        if (!PasswordCorrect) throw new Error('password est incorrect');

        // Générer les tokens d'accès et de rafraîchissement
        const accessToken = JwtUtil.generateAccessToken({ email: email });
        const refreshToken = await JwtUtil.generateRefreshToken({ email: email });
        return { accessToken, refreshToken };
    }
    catch (error) {
      throw error;
    }
}

export const logout = async (token: string, refreshToken: string) => {
    try {
        const addToken = await BlackListService.addToBlacklist(token, refreshToken);
        return 'Token ajouté à la blackliste';
    } catch (error) {
        throw error;
    }
}

export const refreshToken = async (refreshToken: string) => {
    try {
        const payload = await JwtUtil.verifyRefreshToken(refreshToken);
        const accessToken = JwtUtil.generateAccessToken(payload);
        const newRefreshToken = await JwtUtil.generateRefreshToken(payload);
        return { accessToken, refreshToken: newRefreshToken };
    } catch (error) {
        throw error;
    }
}
