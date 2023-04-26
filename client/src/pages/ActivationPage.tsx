import { AppRoutes } from '@/types';
import React, { FC } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

import styles from '@/components/activation/activation.module.scss';

import useTypedSelector from '@/hooks/redux/useTypedSelector';
import useUpdateEffect from '@/hooks/useUpdateEffect';

const ActivationPage: FC<any> = () => {
    const { isAuth, isActivated } = useTypedSelector((state) => state.user);
    const navigate = useNavigate();
    const location = useLocation();
    const isValid = isAuth && !isActivated;
    const isAtActivatePage = location.pathname.split('/').pop() === 'activate';

    useUpdateEffect(() => {
        if (!isValid) {
            navigate(AppRoutes.index);
        }
        // if(isAtActivatePage && isActivated){
        //     navigate(AppRoutes.index)
        // }
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

export default ActivationPage