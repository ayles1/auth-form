import { MutationDefinition } from '@reduxjs/toolkit/dist/query/react';
import { UseMutation } from '@reduxjs/toolkit/dist/query/react/buildHooks';
import { BaseQueryFn } from '@reduxjs/toolkit/query/react';
import { object, string } from 'yup';

import { BaseQueryArgs, IAuthRequest, IAuthResponse, ResponseError } from '@/api/auth/auth.types';

export interface IAuthForm {
    type: 'login' | 'register';
    useMutationHook: UseMutation<
        MutationDefinition<
            IAuthRequest,
            BaseQueryFn<Omit<BaseQueryArgs, 'baseUrl'>, unknown, ResponseError<unknown>, {}, {}>,
            never,
            IAuthResponse,
            'AuthApi'
        >
    >;
}

export interface InputFields {
    email: string;
    password: string;
}
export const schema = object({
    email: string().email().required().nonNullable(),
    password: string().required().min(6).max(14)
});