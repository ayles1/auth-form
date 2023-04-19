import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC, useEffect } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import Button from '@/components/ui/button/Button';
import FormContent from '@/components/ui/form/FormContent';
import Input from '@/components/ui/input/Input';

import { IAuthForm, Inputs, schema } from './authForm.interface';
import styles from './authForm.module.scss';


const LoginForm: FC<IAuthForm> = () => {
    useEffect(() => {
        const location = window.location.pathname;
    }, [window.location]);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Inputs>({
        mode: 'onChange',
        delayError: 1000,
        shouldFocusError: false,
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    };
    return (
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

                <Button variant={'contained'}>Hey!</Button>
            </FormContent>
        </form>
    );
};

export default LoginForm;