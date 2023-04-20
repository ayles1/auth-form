import React, { FC } from 'react';

import AuthForm from '@/components/authForm/AuthForm';

import { AuthService } from '@/services/auth/auth.service';

const LoginForm: FC<any> = () => {
    return (
        <>
            <AuthForm authFn={AuthService.login} />
        </>
    );
};

export default LoginForm;
