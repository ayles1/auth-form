import React, { FC } from 'react';

import AuthForm from '@/components/authForm/AuthForm';


const LoginForm: FC<any> = () => {
    return (
        <>
            <AuthForm type='login' />
        </>
    );
};

export default LoginForm;