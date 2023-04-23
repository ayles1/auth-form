import {axiosClassic} from '@/api';

import {IAuthData, removeTokenFromStorage, saveToStorage} from '@/services/auth/auth.helper';

export default class AuthService {
    static async login(email: string, password: string): Promise<IAuthData> {
        const response = await axiosClassic.post<IAuthData>('/api/auth/login', {
            email,
            password
        });
        if (response.data.accessToken) {
            saveToStorage(response.data);
        }
        return response.data;
    }

    static async register(email: string, password: string): Promise<IAuthData> {
        const response = await axiosClassic.post<IAuthData>('/api/auth/register', {
            email,
            password
        });
        if (response.data.accessToken) {
            saveToStorage(response.data);
        }
        return response.data;
    }

    static async logout(): Promise<void> {
        const response = await axiosClassic.post('/api/auth/logout')
        removeTokenFromStorage();
        localStorage.removeItem('user');
    }
}
