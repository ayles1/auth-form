import React, { FC } from 'react';

import AuthForm from '@/components/AuthForm/AuthForm';

import { useLoginMutation } from '@/api/auth/authApi';

const LoginForm: FC = () => {
  return (
    <>
      <AuthForm type='login' useMutationHook={useLoginMutation} />
    </>
  );
};

export default LoginForm;
