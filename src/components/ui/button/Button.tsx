import cn from 'classnames';
import React, { FC } from 'react';

import { IButton } from './button.interface';
import styles from './button.module.scss';


const Button: FC<IButton> = (props) => {
    const { className, children, variant, onClick } = props;
    return (
        <button
            className={cn(className, styles.button, {
                [styles['contained']]: variant === 'contained',
                [styles['outlined']]: variant === 'outlined'
            })}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

export default Button;