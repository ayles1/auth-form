import React, {FC} from 'react';

import AuthForm from '@/components/authForm/AuthForm';
import IRegisterForm from '@/components/registerForm/registerForm.interface';


const RegisterForm: FC<IRegisterForm> = () => {
    return (
        <>
            <AuthForm  />
        </>
    );
};

export default RegisterForm;
