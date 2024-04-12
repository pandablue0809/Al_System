/**
 * @author Tahara Kazuki
 * @created 03/08/2024
 * @lastModified 04/11/2024
 * @description Types list in Config Store
 * @copyright SoTru
 */
import { DEFAULT_CONFIG } from "../constants/configConstant";
import type { ChatConfig } from "../types/ConfigTypes";
import { StorageKey } from "../types/ConfigTypes";

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

export const readUser = (): UserModel | null => {
    const userStr = localStorage.getItem('user');
    return userStr ? JSON.parse(userStr) : null;
};

export const persistPermission = (permission: string): void => {
    localStorage.setItem('permission', permission);
};

export const readPermission = (): string | null => {
    return localStorage.getItem('permission');
}

export const persistConfig = (conf: ChatConfig): void => {
    localStorage.setItem(StorageKey.Config, JSON.stringify(conf));
}

export const readConfig = (): ChatConfig => {
    const confStr = localStorage.getItem(StorageKey.Config);
    return confStr ? JSON.parse(confStr) : DEFAULT_CONFIG;
}




export const deleteToken = (): void => localStorage.removeItem('accessToken');
export const deleteUser = (): void => localStorage.removeItem('user');
export const deletePermission = (): void => localStorage.removeItem('permission');