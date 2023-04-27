import { axiosWithAuth } from '@/api';
import { BaseQueryFn, createApi } from '@reduxjs/toolkit/query/react';
import { AxiosError, AxiosResponse } from 'axios';



import { removeTokenFromStorage, saveToStorage } from '@/api/auth/auth.helper';
import { BaseQueryArgs, IAuthRequest, IAuthResponse, ILogOutResponse, IResponseError } from '@/api/auth/types';


const axiosBaseQuery = <T>({
  baseUrl = ''
}: Pick<BaseQueryArgs, 'baseUrl'>): BaseQueryFn<
  Omit<BaseQueryArgs, 'baseUrl'>,
  T,
  IResponseError<T>
> => {
  return async ({ url, method, headers, body }) => {
    try {
      const result = await axiosWithAuth<T>({
        url: baseUrl + url,
        method,
        headers,
        data: body
      });
      return result;
    } catch (axiosError) {
      const err = axiosError as AxiosError<T>;
      return {
        error: {
          status: err.response!.status,
          data: err.response!.data || err.message
        }
      };
    }
  };
};

export const AuthApi = createApi({
  reducerPath: 'AuthApi',
  refetchOnMountOrArgChange: false,
  baseQuery: axiosBaseQuery<unknown>({ baseUrl: 'http://localhost:4000/api' }),

  endpoints: (builder) => ({
    login: builder.mutation<IAuthResponse, IAuthRequest>({
      query: (credentials: IAuthRequest) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials
      }),
      transformResponse: (response: IAuthResponse) => {
        saveToStorage(response);
        return response;
      }
    }),
    register: builder.mutation<IAuthResponse, IAuthRequest>({
      query: (userData: IAuthRequest) => ({
        url: '/auth/register',
        method: 'POST',
        body: userData
      }),
      transformResponse: (response: IAuthResponse) => {
        saveToStorage(response);
        return response;
      }
    }),
    logout: builder.mutation<AxiosResponse<ILogOutResponse>, null>({
      query: () => ({
        url: '/auth/logout',
        method: 'POST'
      }),
      transformResponse: (response: AxiosResponse<ILogOutResponse>) => {
        removeTokenFromStorage();
        return response;
      }
    }),
    checkAuth: builder.mutation<IAuthResponse, any>({
      query: () => ({
        url: '/auth/refresh',
        method: 'POST'
      }),

      transformResponse: (response: IAuthResponse) => {
        saveToStorage(response);
        console.log(response);
        return response;
      }
    })
  })
});
export const { useLoginMutation, useLogoutMutation, useCheckAuthMutation, useRegisterMutation } =
  AuthApi;