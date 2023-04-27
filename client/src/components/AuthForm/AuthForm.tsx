import { AppRoutes } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/ui/Button/Button';
import FormContent from '@/components/ui/Form/FormContent';
import Input from '@/components/ui/Input/Input';

import { popupActions } from '@/store/slices/popup/popup.slice';
import { userActions } from '@/store/slices/user/user.slice';

import useAppDispatch from '@/hooks/redux/useAppDispatch';

import { IAuthForm, InputFields, schema } from './AuthForm.interface';
import styles from './AuthForm.module.scss';

const AuthForm: FC<IAuthForm> = ({ type, useMutationHook }) => {
  const navigate = useNavigate();
  const { setPopup } = useAppDispatch(popupActions);
  const { setUser } = useAppDispatch(userActions);

  const [mutate, result] = useMutationHook();
  const isLogin = type === 'login';
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<InputFields>({
    mode: 'onChange',
    delayError: 1000,
    shouldFocusError: false,
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    if (result.isError) {
      if ('data' in result.error) {
        setPopup({
          message: (result.error.data as any).message,
          type: 'error',
          statusCode: result.error.status,
          position: 'top-left'
        });
      }
    }
  }, [result.isError]);

  const onSubmit: SubmitHandler<InputFields> = async ({ email, password }) => {
    if (!isLogin) {
      const response = await mutate({ email, password });
      if ('data' in response) {
        setUser({
          isAuth: true,
          email: response.data.user.email,
          id: response.data.user.id,
          isActivated: response.data.user.isActivated
        });
        navigate(AppRoutes.activate);
      }
    }
    if (isLogin) {
      const response = await mutate({ email, password });
      if ('data' in response) {
        setUser({
          isAuth: true,
          email: response.data.user.email,
          id: response.data.user.id,
          isActivated: response.data.user.isActivated
        });
        navigate(AppRoutes.index);
      }
    }
  };
  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
        <FormContent className={styles.container}>
          <h1 className={styles['form-title']}>{isLogin ? 'Login' : 'Sign up'}</h1>
          <Input
            type='email'
            label='Email'
            error={errors.email?.message}
            {...register('email')}
            className={styles.input}
          />
          <Input
            type='password'
            label='Password'
            error={errors.password?.message}
            {...register('password')}
            className={styles.input}
          />
          {result.isLoading && <div>Loading...</div>}
          <Button className={styles.button} variant='contained'>
            {isLogin ? 'Login' : 'Sign up'}
          </Button>
        </FormContent>
      </form>
    </>
  );
};

export default AuthForm;