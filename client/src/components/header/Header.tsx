import React, {FC} from 'react';

import {IHeader} from './header.interface';
import styles from './header.module.scss';
import {useAuth} from "@/hooks/useAuth";

const Header: FC<IHeader> = () => {
    const {isAuth} = useAuth()
    return <header className={styles.header}>
        <div className={styles.logout}></div>
    </header>;
};

export default Header;
