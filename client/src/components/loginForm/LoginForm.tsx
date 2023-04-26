import React, { FC } from 'react';

import AuthForm from '@/components/authForm/AuthForm';

import { useLoginMutation } from '@/api/auth/authApi';

const LoginForm: FC<any> = () => {
    return (
        <>
            <AuthForm type={'login'} useMutationHook={useLoginMutation} />
        </>
    );
};

export default LoginForm;
