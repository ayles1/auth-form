import React, { FC, useEffect } from 'react';
import { Outlet } from 'react-router-dom';

import Footer from '@/components/Footer/Footer';
import Header from '@/components/Header/Header';
import Popup from '@/components/ui/Popup/Popup';

import { useCheckAuthMutation } from '@/api/auth/authApi';

import { userActions } from '@/store/slices/user/user.slice';

import useAppDispatch from '@/hooks/redux/useAppDispatch';
import useTypedSelector from '@/hooks/redux/useTypedSelector';

const Layout: FC = () => {
  const [checkAuth, result] = useCheckAuthMutation();
  const { setUser } = useAppDispatch(userActions);
  const { message, type, isOpen, position, variant, statusCode } = useTypedSelector(
    (state) => state.popup
  );

  useEffect(() => {
    if (localStorage.getItem('token')) {
      checkAuth('').then((response) => {
        if ('data' in response) {
          setUser({
            email: response.data.user.email,
            id: response.data.user.id,
            isActivated: response.data.user.isActivated,
            isAuth: true
          });
        }
      });
    }
  }, []);
  return (
    <>
      {isOpen && (
        <Popup<typeof type>
          type={type}
          statusCode={statusCode}
          variant={variant}
          autoCloseTime={4000}
          message={message}
          position={position}
        />
      )}
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;