import * as JwtUtils from '../utils/jwtUtil';

// Middleware pour vérifier l'authentification
export const AuthMiddleware = async (req, res, next: Function) => {
    try { 
        const token = req.headers.authorization.replace('Bearer ', '');
        if (!token) { 
            return res.status(400).json({ message: 'Token d\'authentification manquant' });
        }

        const decodedToken = JwtUtils.decodeAccessToken(token);
        if (!decodedToken) return res.status(401).json({ message: 'Token d\'authentification invalide' });

        // Vérifier si l'utilisateur a le rôle d'administrateur
        if (decodedToken.role !== 'admin') {
            return res.status(403).json({ message: 'Accès refusé. Seuls les administrateurs peuvent effectuer cette action.' });
        }

        req.user = decodedToken;
        // Vérifie si l'utilisateur est administrateur
        req.isAdmin = decodedToken.role === 'admin';

        next(); 
    } catch (error) {
        return res.status(500).json({ message: 'Erreur lors de la vérification du token d\'authentification' });
    }
}
