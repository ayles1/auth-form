import { AppRoutes } from '@/types';
import React from 'react';
import { TbError404 } from 'react-icons/all';

import Button from '@/components/ui/button/Button';

import styles from './error.module.scss';

const ErrorNotFound = () => {
    return (
        <div className={styles.container}>
            <TbError404 size={30} />
            <h1>This page doesnt exist</h1>
            <Button className={styles.button} link={AppRoutes.index}>
                Go back home!
            </Button>
        </div>
    );
};

export default ErrorNotFound;