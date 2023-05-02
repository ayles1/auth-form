import React, { FC } from 'react';

import AuthForm from '@/components/AuthForm/AuthForm';
import IRegisterForm from '@/components/RegisterForm/RegisterForm.interface';

import { useRegisterMutation } from '@/api/auth/authApi';

const RegisterForm: FC<IRegisterForm> = () => {
  return <AuthForm type='register' useMutationHook={useRegisterMutation} />;
};

export default RegisterForm;
