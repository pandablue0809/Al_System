type UserModel = {
    username: string;
    email: string;
    permission: string;
}

export const persistToken = (token: string): void => {
    localStorage.setItem('accessToken', token)
}

export const readToken = (): string | null => {
    return localStorage.getItem('accessToken');
}

export const persistUser = (user: UserModel): void => {
    localStorage.setItem('user', JSON.stringify(user));
};

export const readPermission = (): string | null => {
    return localStorage.getItem('permission');
}

export const persistPermission = (permission: string): void => {
    localStorage.setItem('permission', permission);
};

export const readUser = (): UserModel | null => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
};

export const deleteToken = (): void => localStorage.removeItem('accessToken');
export const deleteUser = (): void => localStorage.removeItem('user');
export const deletePermission = (): void => localStorage.removeItem('permission');