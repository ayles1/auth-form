import { object, string } from 'yup';

import { IAuthData } from '@/services/auth/auth.helper';

export interface IAuthForm {
    authFn: (email: string, password: string) => Promise<IAuthData>;
}

export interface InputFields {
    email: string;
    password: string;
}
export const schema = object({
    email: string().email().required().nonNullable(),
    password: string().required().min(6).max(14)
});
