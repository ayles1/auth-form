import {AppRoutes} from '@/types';
import React, {FC, PropsWithChildren} from 'react';
import {Navigate} from 'react-router-dom';

import {useAuth} from '@/hooks/useAuth';

const PrivatePage: FC<PropsWithChildren> = ({ children }) => {
    const { isAuth } = useAuth();
    return <>{isAuth ? <>{children}</> : <Navigate to={AppRoutes.login} />}</>;
};

export default PrivatePage;
