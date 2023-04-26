import { AppRoutes } from '@/types';
import React, { FC } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineLogin } from 'react-icons/all';
import { useLocation } from 'react-router-dom';

import Button from '@/components/ui/button/Button';
import UserBar from '@/components/userBar/UserBar';

import { useAuth } from '@/hooks/useAuth';

import { IHeader } from './header.interface';
import styles from './header.module.scss';

const Header: FC<IHeader> = () => {
    const { isAuth } = useAuth();
    const location = useLocation();

    const isOnSignup = location.pathname === AppRoutes.register;
    const isOnLogin = location.pathname === AppRoutes.login;

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
                    <Button className={styles.button} link={AppRoutes.register}>
                        <AiOutlineClose />
                        <div>Logout</div>
                    </Button>
                </>
            )}
        </header>
    );
};

export default Header;