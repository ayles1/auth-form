import React, { FC } from 'react';

import AuthForm from '@/components/AuthForm/AuthForm';
import { ILoginForm } from '@/components/LoginForm/LoginForm.interface';

import { useLoginMutation } from '@/api/auth/authApi';

const LoginForm: FC<ILoginForm> = () => {
  return <AuthForm type='login' useMutationHook={useLoginMutation} />;
};

export default LoginForm;
