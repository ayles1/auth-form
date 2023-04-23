import React, {FC} from 'react';

import Popup from '@/components/ui/popup/Popup';

import useTypedSelector from '@/hooks/redux/useTypedSelector';
import useDocumentTitle from '@/hooks/useDocumentTitle';

import IPageTitle from './AppPage.interface';

const AppPage: FC<IPageTitle> = ({ title, children }) => {
    useDocumentTitle(title);
    const { message, type, isOpen, position, variant } = useTypedSelector((state) => state.popup);
    return (
        <>
            {isOpen && (
                <Popup
                    type={type}
                    variant={variant}
                    autoCloseTime={false}
                    message={message}
                    position={position}
                />
            )}
            {children}
        </>
    );
};

export default AppPage;
