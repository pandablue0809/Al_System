export const persistToken = (token: string): void => {
    localStorage.setItem('accessToken', token)
}

export const readToken = (): string => {
    return localStorage.getItem('accessToken') || 'bearerToken'
}

export const deleteToken = (): void => localStorage.removeItem('accessToken');