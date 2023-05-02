import cn from 'classnames';
import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { IButton } from './Button.interface';
import styles from './Button.module.scss';

const Button: FC<IButton> = (props) => {
  const { className, children, link, target = '_self', variant = 'contained', onClick } = props;
  const isLink = !!link;

  return (
    <button
      className={cn(className, styles.button, {
        [styles['contained']]: variant === 'contained',
        [styles['outlined']]: variant === 'outlined'
      })}
      onClick={onClick}
    >
      {isLink ? (
        <Link to={link} target={target}>
          {children}
        </Link>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
