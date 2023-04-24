import Cookies from 'js-cookie';

export interface IAuthResponse {
    accessToken: string;
    refreshToken: string;
    user: {
        email: string;
        id: string;
        isActivated: boolean;
    };
}

export interface IAuthRequest {
    password:string;
    email:string;
}

const saveTokenToStorage = (token: IAuthResponse['accessToken']) => {
    Cookies.set('token', token);
};

export const removeTokenFromStorage = () => {
    Cookies.remove('token');
};
export const saveToStorage = (data: IAuthResponse) => {
    saveTokenToStorage(data.accessToken);
    localStorage.setItem('user', JSON.stringify({ ...data.user }));
};
