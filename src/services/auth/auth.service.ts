import axios from 'axios';

import { IAuthData, removeTokenFromStorage, saveToStorage } from '@/services/auth/auth.helper';

export const AuthService = {
    async login(email: string, password: string) {
        const response = await axios.post<IAuthData>('/auth/login', {
            email,
            password
        });
        if (response.data.token) {
            saveToStorage(response.data);
        }
        return response.data;
    },
    async register(email: string, password: string) {
        const response = await axios.post<IAuthData>('/auth/register', {
            email,
            password
        });
        if (response.data.token) {
            saveToStorage(response.data);
        }
        return response.data;
    },
    logout() {
        removeTokenFromStorage();
        localStorage.removeItem('user');
    }
};