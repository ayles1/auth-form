import cn from 'classnames';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { IButton } from './button.interface';
import styles from './button.module.scss';

const Button: FC<IButton> = (props) => {
    const { className, children, link, target = '_self', variant = 'contained', onClick } = props;
    const isLink = !!link;
    return (
        <>
            {isLink ? (
                <Link className={className} target={target} to={link}>
                    {children}
                </Link>
            ) : (
                <>
                    <button
                        className={cn(className, styles.button, {
                            [styles['contained']]: variant === 'contained',
                            [styles['outlined']]: variant === 'outlined'
                        })}
                        onClick={onClick}
                    >
                        {children}
                    </button>
                </>
            )}
        </>
    );
};

export default Button;