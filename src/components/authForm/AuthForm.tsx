import { yupResolver } from '@hookform/resolvers/yup';
import React, { FC } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { object, string } from 'yup';

import Button from '@/components/ui/button/Button';
import Input from '@/components/ui/input/Input';

import styles from './authForm.module.scss';


type Inputs = {
    email: string;
    password: string;
};
const schema = object({
    email: string().email().required().nonNullable(),
    password: string().required().min(6).max(14)
});

const AuthForm: FC<any> = () => {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<Inputs>({
        mode: 'onChange',
        delayError: 1000,
        resolver: yupResolver(schema)
    });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    };
    console.log('render');
    return (
        <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
            <Input
                type={'email'}
                label={'Email'}
                error={errors.email?.message}
                {...register('email')}
            />
            <Input
                type={'password'}
                label={'Password'}
                error={errors.password?.message}
                {...register('password')}
            />

            <Button variant={'contained'}>Hey!</Button>
        </form>
    );
};

export default AuthForm;

// const [emailError, setEmailError] = useState<string | undefined>('');
// const [passwordError, setPasswordError] = useState<string | undefined>('');
//
// useEffect(() => {
//     const { email, password } = getValues();
//     console.log('update');
//     if (email.length > 4) {
//         setEmailError(errors.email?.message);
//     }
//     if (password.length > 2) {
//         setPasswordError(errors.password?.message);
//     }
// }, [getValues('password'), getValues('email')]);

// const validateSubmit = (cb: UseFormHandleSubmit<Inputs>, onSubmitFn: SubmitHandler<Inputs>) => {
//     // setEmailError(errors.email?.message);
//     // setPasswordError(errors.password?.message);
//     return cb(onSubmitFn);
// };