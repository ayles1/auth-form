import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import useTypedSelector from '@/hooks/redux/useTypedSelector';
import useDocumentTitle from '@/hooks/useDocumentTitle';

import IPageTitle from './AppPage.interface';

const AppPage: FC<IPageTitle> = ({ title, shouldRedirectIfAuth = false, children }) => {
    const { isAuth } = useTypedSelector((state) => state.user);
    const navigate = useNavigate();

    useDocumentTitle(title);

    // useEffect(()=>{
    //     if(shouldRedirectIfAuth && isAuth) {
    //         navigate(AppRoutes.index)
    //     }
    // },[isAuth])
    return <>{children}</>;
};

export default AppPage;