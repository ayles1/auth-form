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
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF5bGVzMTExM0BnbWFpbC5jb20iLCJpZCI6IjY0NDhjMmViM2IwOWZiNmQ0ZTIyYmQwNCIsImlzQWN0aXZhdGVkIjpmYWxzZSwiaWF0IjoxNjgyNDkwMDkyLCJleHAiOjE2ODI0OTA5OTJ9.zGvMAxgDyHzUuPv742zfWYGiwXWQzfgJRkOuSrvLW74
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImF5bGVzMTExM0BnbWFpbC5jb20iLCJpZCI6IjY0NDhjMmViM2IwOWZiNmQ0ZTIyYmQwNCIsImlzQWN0aXZhdGVkIjpmYWxzZSwiaWF0IjoxNjgyNDkwMDkyLCJleHAiOjE2ODUwODIwOTJ9.7EKKzxnW7CURKVvmhFYk5t4qomCdmWIj8_TUOOCf_mU