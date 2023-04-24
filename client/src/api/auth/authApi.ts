import {BaseQueryFn, createApi} from "@reduxjs/toolkit/query/react";
import {AxiosError, AxiosRequestConfig, AxiosResponse} from 'axios';
import {IAuthRequest, IAuthResponse} from "@/api/auth/auth.helper";
import {axiosClassic} from "@/api";

type BaseQueryArgs = {
    baseUrl?: string;
    url: string;
    method: AxiosRequestConfig['method'];
    headers?: AxiosRequestConfig['headers'];
    body?: any;
};

type BaseQueryResult<T> = {
    data: T;
    status: number;
};

const axiosBaseQuery = <T>(
    {
        baseUrl = '',
    }: Pick<BaseQueryArgs, 'baseUrl'>): BaseQueryFn<Omit<BaseQueryArgs, 'baseUrl'>,T, unknown> => {
    return async (
        {
            url,
            method,
            headers,
            body,
        }) => {
        try {
            return await axiosClassic<T>({url: baseUrl + url, method, headers, data: body})
        } catch (axiosError) {
            const err = axiosError as AxiosError
            return {
                error: {
                    status: err.response?.status,
                    data: err.response?.data || err.message,
                },
            }
        }
    }

};


export const AuthApi = createApi({
    reducerPath: 'AuthApi',
    tagTypes: ['auth'],
    refetchOnMountOrArgChange: false,
    baseQuery: axiosBaseQuery<AxiosResponse<IAuthResponse>>({baseUrl: 'http://localhost:4000/api'}),
    endpoints: (builder) => ({
        login: builder.mutation({
            query: (credentials: IAuthRequest) => ({
                url: '/auth/login',
                method: 'POST',
                body: credentials,
            }),
        }),
        register: builder.mutation<IAuthResponse, IAuthRequest>({
            query: (userData: IAuthRequest) => ({
                url: '/auth/register',
                method: 'POST',
                body: userData,
            }),
        }),
        logout: builder.mutation<IAuthResponse, IAuthRequest>({
            query: () => ({
                url: '/auth/logout',
                method: 'POST',
            }),
        }),

    }),
});
export const {useLoginMutation, useLogoutMutation} = AuthApi

export const useRegisterMutation = AuthApi.useRegisterMutation


