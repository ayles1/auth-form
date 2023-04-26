import { AppRoutes } from '@/types';
import React, { FC } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineLogin } from 'react-icons/all';
import { useLocation, useNavigate } from 'react-router-dom';

import Button from '@/components/ui/button/Button';
import UserBar from '@/components/userBar/UserBar';



import { useLogoutMutation } from '@/api/auth/authApi';



import { userActions } from '@/store/slices/user/user.slice';



import useAppDispatch from '@/hooks/redux/useAppDispatch';
import { useAuth } from '@/hooks/useAuth';

import { IHeader } from './header.interface';
import styles from './header.module.scss';

const Header: FC<IHeader> = () => {
    const { isAuth } = useAuth();
    const location = useLocation();
    const navigate = useNavigate();

    const [logout, result] = useLogoutMutation();
    const { removeUser } = useAppDispatch(userActions);

    const isOnSignup = location.pathname === AppRoutes.register;
    const isOnLogin = location.pathname === AppRoutes.login;
    const handleClick = async () => {
        const response = await logout(null);
        console.log(response);
        removeUser();
        navigate(AppRoutes.login);
    };
    return (
        <header className={styles.header}>
            {isOnSignup && (
                <>
                    <Button className={styles.button} link={AppRoutes.login}>
                        <AiOutlineLogin size={30} />
                        <div>Login</div>
                    </Button>
                </>
            )}

            {isOnLogin && (
                <>
                    <Button className={styles.button} link={AppRoutes.register}>
                        <AiOutlineLogin size={30} />
                        <div>Sign up</div>
                    </Button>
                </>
            )}

            {isAuth && (
                <>
                    <UserBar />
                    <Button
                        className={styles.button}
                        // link={AppRoutes.register}
                        onClick={handleClick}
                    >
                        <AiOutlineClose />
                        <div>Logout</div>
                    </Button>
                </>
            )}
        </header>
    );
};

export default Header;