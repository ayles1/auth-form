import { AxiosRequestConfig } from 'axios';


export interface ILogOutResponse {
  token: string;
}
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
  password: string;
  email: string;
}

export type BaseQueryArgs = {
  baseUrl?: string;
  url: string;
  method: AxiosRequestConfig['method'];
  headers?: AxiosRequestConfig['headers'];
  body?: any;
};

export interface IResponseError<T> {
  status?: number;
  data: string | T;
}