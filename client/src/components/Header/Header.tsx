import { AppRoutes } from '@/types';
import React, { FC } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { AiOutlineLogin } from 'react-icons/all';
import { useLocation, useNavigate } from 'react-router-dom';

import UserBar from '@/components/UserBar/UserBar';
import Button from '@/components/ui/Button/Button';

import { useLogoutMutation } from '@/api/auth/authApi';

import { userActions } from '@/store/slices/user/user.slice';

import useAppDispatch from '@/hooks/redux/useAppDispatch';
import { useAuth } from '@/hooks/useAuth';

import { IHeader } from './Header.interface';
import styles from './Header.module.scss';

const Header: FC<IHeader> = () => {
  const { isAuth } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();

  const [logout] = useLogoutMutation();
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
    <header data-testid='header' className={styles.header}>
      <nav className={styles.navbar}>
        {isOnSignup && (
          <Button className={styles.button} link={AppRoutes.login}>
            <AiOutlineLogin size={30} />
            <div>Login</div>
          </Button>
        )}

        {isOnLogin && (
          <Button className={styles.button} link={AppRoutes.register}>
            <AiOutlineLogin size={30} />
            <div>Sign up</div>
          </Button>
        )}

        {isAuth && (
          <>
            <UserBar className={styles.button} />
            <Button className={styles.button} onClick={handleClick}>
              <AiOutlineClose size={30} />
              <div>Logout</div>
            </Button>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;
