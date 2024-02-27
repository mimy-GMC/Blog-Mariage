export const jwtConfig = {
    secret: 'votre_code_secret',
    expiresIn: '24h', // Durée de validité du JWT
    refreshSecret: 'votre_refresh_code_secret',
    refreshExpiresIn: '7d', // Durée de validité du refresh token
}
