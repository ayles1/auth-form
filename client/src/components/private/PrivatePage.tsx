import { AppRoutes } from '@/types';
import React, { FC, PropsWithChildren } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '@/hooks/useAuth';
import useUpdateEffect from '@/hooks/useUpdateEffect';

const PrivatePage: FC<PropsWithChildren> = ({ children }) => {
    const { isAuth } = useAuth();
    const navigate = useNavigate();

    useUpdateEffect(() => {
        if (!isAuth) {
            navigate(AppRoutes.login);
        }
    }, [isAuth]);
    return <>{isAuth && children}</>;
};

export default PrivatePage;