import { AppRoutes } from '@/types';
import React, { FC, PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';


const PrivatePage: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            {children}
            <Navigate to={AppRoutes.login} />
        </>
    );
};

export default PrivatePage;