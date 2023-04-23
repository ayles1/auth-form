import React, {FC} from 'react';

import {IHeader} from './header.interface';
import styles from './header.module.scss';

const Header: FC<IHeader> = () => {
    return <header className={styles.header}></header>;
};

export default Header;
