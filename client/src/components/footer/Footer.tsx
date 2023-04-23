import React, {FC} from 'react';

import {IFooter} from './footer.interface';
import styles from './footer.module.scss';

const Footer: FC<IFooter> = () => {
    return <footer className={styles.footer}></footer>;
};

export default Footer;
