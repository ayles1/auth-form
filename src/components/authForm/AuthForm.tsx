import { AppRoutes } from '@/types';
import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import Button from '@/components/ui/button/Button';
import FormContent from '@/components/ui/form/FormContent';
import Input from '@/components/ui/input/Input';

import { popupActions } from '@/store/slices/popupSlice';
import { userActions } from '@/store/slices/userSlice';

import useAppDispatch from '@/hooks/redux/useAppDispatch';

import { IAuthForm, InputFields, schema } from './authForm.interface';
import styles from './authForm.module.scss';

const AuthForm: FC<IAuthForm> = ({ authFn }) => {
    const [isLoading, setIsLoading] = useState(false);

    const navigate = useNavigate();
    const { setPopup } = useAppDispatch(popupActions);
    const { setUser } = useAppDispatch(userActions);

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

    const onSubmit: SubmitHandler<InputFields> = ({ email, password }) => {
        setIsLoading(true);
        authFn(email, password)
            .then((response) => {
                setUser(response);
                navigate(AppRoutes.index);
            })
            .catch((error) => {
                setPopup({
                    message: error.response.data.message,
                    type: 'error',
                    position: 'top-left'
                });
                reset();
            })
            .finally(() => {
                setIsLoading(false);
            });
    };
    return (
        <>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <FormContent className={styles.container}>
                    <Input
                        type={'email'}
                        label={'Email'}
                        error={errors.email?.message}
                        {...register('email')}
                        className={styles.input}
                    />
                    <Input
                        type={'password'}
                        label={'Password'}
                        error={errors.password?.message}
                        {...register('password')}
                        className={styles.input}
                    />
                    {isLoading && <div>Loading...</div>}
                    <Button variant={'contained'}>Sign up</Button>
                </FormContent>
            </form>
        </>
    );
};

export default AuthForm;
