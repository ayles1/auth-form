import {BaseQueryFn, createApi} from "@reduxjs/toolkit/dist/query/react";
import {AxiosError, AxiosRequestConfig} from "axios";
import {axiosClassic, axiosWithAuth} from "@/api";

const axiosBaseQuery =
    (
        { baseUrl,withAuth }: { baseUrl: string,withAuth:boolean }
    ): BaseQueryFn<
        {
            url: string
            method: AxiosRequestConfig['method']
            data?: AxiosRequestConfig['data']
            params?: AxiosRequestConfig['params']
        },
        unknown,
        unknown
        > =>

        async ({url,params,method,data}) => {
            try {
                const result = withAuth? await axiosWithAuth({ url: baseUrl + url, method, data, params }) : await axiosClassic({ url: baseUrl + url, method, data, params })
                return result.data
            } catch (axiosError) {
                let err = axiosError as AxiosError
                return {
                    error: {
                        status: err.response?.status,
                        data: err.response?.data || err.message,
                    },
                }
            }
        }


export const userApi = createApi(
    {
        reducerPath: 'userApi',
        baseQuery: axiosBaseQuery({
            baseUrl:'/api',
            withAuth:false
        }),
        endpoints:(builder)=>({
            login:builder.query({
                query:()=> ({url:'/mutation',method:'post'})
            }),
            register:builder.query({
                query:()=> ({url:'/mutation',method:'post'})
            }),
            logout:builder.query({
                query:()=> ({url:'/mutation',method:'post'})
            }),
        })
    }
)

export const { useLoginQuery } = userApi
