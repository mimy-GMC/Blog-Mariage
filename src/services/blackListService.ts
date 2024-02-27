// On défini une interface TokenData pour représenter les données de token et de refresh token.
interface TokenData {
    token: string;
    refreshToken: string;
}

// On créé un tableau blackList pour stocker ces données
const blacklist: TokenData[] = [];

// Fonction pour ajouter un token à la liste noire
export const addToBlacklist = async (accessToken: string, refreshToken: string) => {
    // Ajouter les jetons à la liste noire
    blacklist.push({ token: accessToken, refreshToken: refreshToken });
    return 'Tokens sont ajoutés à la blackliste';
};

// Fonction pour vérifier si un token ou un refreshToken est dans la liste noire
export const isBlacklisted = async (token: string, refreshToken: string) => {
    // On utilise la méthode some pour vérifier s'il existe au moins un élément dans le tableau 
    //qui vérifie la condition.
    return blacklist.some(item => item.token === token && item.refreshToken === refreshToken);
}

// Fonction pour supprimer un token de la liste noire
export const removeBlacklist = async (token: string) => {
    //On utilise la méthode findIndex pour trouver l'index de l'élément qui correspond au token donné.
    const index = blacklist.findIndex(item => item.token === token);

    //Si un index est trouvé différent de -1, alors le token existe dans la liste noire.
    //On utilise la méthode splice pour supprimer l'élément du tableau à cet index.
    if (index !== -1) {
        blacklist.splice(index, 1);
        return 'Token removed from blacklist';
    }
    throw new Error('Token not found in blacklist');
}

// Fonction pour récupérer tous les tokens dans la liste noire
export const getAllBlacklistedTokens = async () => {
    return blacklist;
}
