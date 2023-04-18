import Cookies from 'js-cookie';

export interface IAuthData {
    email: string;
    token: string;
    _id: string;
}

const saveTokenToStorage = (token: IAuthData['token']) => {
    Cookies.set('token', token);
};

export const removeTokenFromStorage = () => {
    Cookies.remove('token');
};
export const saveToStorage = (data: IAuthData) => {
    const { email, _id, token } = data;
    saveTokenToStorage(token);
    localStorage.setItem('user', JSON.stringify({ email, _id }));
};