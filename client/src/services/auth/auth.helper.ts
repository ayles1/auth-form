import Cookies from 'js-cookie';

export interface IAuthData {
    accessToken: string;
    refreshToken: string;
    user: {
        email: string;
        id: string;
        isActivated: boolean;
    };
}

const saveTokenToStorage = (token: IAuthData['accessToken']) => {
    Cookies.set('token', token);
};

export const removeTokenFromStorage = () => {
    Cookies.remove('token');
};
export const saveToStorage = (data: IAuthData) => {
    saveTokenToStorage(data.accessToken);
    localStorage.setItem('user', JSON.stringify({ ...data.user }));
};
