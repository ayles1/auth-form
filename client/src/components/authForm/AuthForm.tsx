import {yupResolver} from '@hookform/resolvers/yup';
import React, {FC, useEffect, useState} from 'react';
import {SubmitHandler, useForm} from 'react-hook-form';
import {useNavigate} from 'react-router-dom';

import Button from '@/components/ui/button/Button';
import FormContent from '@/components/ui/form/FormContent';
import Input from '@/components/ui/input/Input';

import {popupActions} from '@/store/slices/popup/popup.slice';

import useAppDispatch from '@/hooks/redux/useAppDispatch';

import {IAuthForm, InputFields, schema} from './authForm.interface';
import styles from './authForm.module.scss';
import {useRegisterMutation} from "@/api/auth/authApi";

const AuthForm: FC<IAuthForm> = () => {
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { setPopup } = useAppDispatch(popupActions);
    const [registerUser,result] = useRegisterMutation()
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
        if(result.isError){
            setPopup({
                message: 'hello',
                type: 'warn' ,
                statusCode:200,
                position: 'top-left',
            })
        }
    }, [result.isError]);

    console.log(result)

    const onSubmit: SubmitHandler<InputFields> = ({ email, password }) => {
        setIsLoading(true);
            registerUser({email,password}).then((response)=>{
                // setUser(response)
                // navigate(AppRoutes.index)
            })
        // authFn(email, password)
        //     .then((response) => {
        //         // setUser(response);
        //         navigate(AppRoutes.index);
        //     })
        //     .catch((error) => {
        //         setPopup({
        //             message: error.response.data.message,
        //             type: 'error',
        //             position: 'top-left'
        //         });
        //         reset();
        //     })
        //     .finally(() => {
        //         setIsLoading(false);
        //     });
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
