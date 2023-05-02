import { IAuthResponse } from '@/api/auth/types';

const saveTokenToStorage = (token: string) => {
  localStorage.setItem('token', token);
};

export const removeTokenFromStorage = () => {
  localStorage.removeItem('token');
};
export const saveToStorage = (data: IAuthResponse) => {
  saveTokenToStorage(data.accessToken);
  localStorage.setItem('user', JSON.stringify({ ...data.user }));
};
