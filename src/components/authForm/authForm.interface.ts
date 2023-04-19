import { object, string } from 'yup';

export interface IAuthForm {
    type: 'login' | 'register';
}

export interface Inputs {
    email: string;
    password: string;
}
export const schema = object({
    email: string().email().required().nonNullable(),
    password: string().required().min(6).max(14)
});