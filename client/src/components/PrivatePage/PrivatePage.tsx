import { AppRoutes } from '@/types';
import React, { FC, PropsWithChildren, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';



import { useAuth } from '@/hooks/useAuth';


const PrivatePage: FC<PropsWithChildren> = ({ children }) => {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigate(AppRoutes.login);
    }
  }, [isAuth]);
  return <>{isAuth && children}</>;
};

export default PrivatePage;