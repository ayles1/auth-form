import React, { FC } from 'react';

import styles from './content.module.scss';

const Content: FC<any> = () => {
    return <div className={styles.container}>Welcome to main page!</div>;
};

export default Content;
