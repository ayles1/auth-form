import {object, string} from 'yup';

export interface IAuthForm {
    // authFn: (email: string, password: string) => Promise<IAuthData>;
}

export interface InputFields {
    email: string;
    password: string;
}
export const schema = object({
    email: string().email().required().nonNullable(),
    password: string().required().min(6).max(14)
});
