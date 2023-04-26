import React, { FC } from 'react';

import AuthForm from '@/components/authForm/AuthForm';
import IRegisterForm from '@/components/registerForm/registerForm.interface';

import { useRegisterMutation } from '@/api/auth/authApi';

const RegisterForm: FC<IRegisterForm> = () => {
    return (
        <>
            <AuthForm type={'register'} useMutationHook={useRegisterMutation} />
        </>
    );
};

export default RegisterForm;