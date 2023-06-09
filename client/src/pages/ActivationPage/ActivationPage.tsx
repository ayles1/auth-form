import { AppRoutes } from '@/types';
import React, { FC } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import useTypedSelector from '@/hooks/redux/useTypedSelector';
import useUpdateEffect from '@/hooks/useUpdateEffect';

import styles from './ActivationPage.module.scss';

const ActivationPage: FC = () => {
  const { isAuth, isActivated } = useTypedSelector((state) => state.user);
  const navigate = useNavigate();
  const location = useLocation();
  const isValid = isAuth && !isActivated;
  const isAtActivatePage = location.pathname.split('/').pop() === 'activate';

  useUpdateEffect(() => {
    if (!isValid) {
      navigate(AppRoutes.index);
    }
    console.log(isAtActivatePage, isActivated);
    if (isAtActivatePage && isActivated) {
      navigate(AppRoutes.index);
    }
  }, [isValid]);

  return (
    <>
      {isAtActivatePage ? (
        <div className={styles.container}>Check your email to activate your account!</div>
      ) : (
        <Outlet />
      )}
    </>
  );
};

export default ActivationPage;
