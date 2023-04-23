import React, {FC} from 'react';

import AuthForm from '@/components/authForm/AuthForm';
import IRegisterForm from '@/components/registerForm/registerForm.interface';

import AuthService from '@/services/auth/auth.service';

const RegisterForm: FC<IRegisterForm> = () => {
    return (
        <>
            <AuthForm authFn={AuthService.register} />
        </>
    );
};

export default RegisterForm;
