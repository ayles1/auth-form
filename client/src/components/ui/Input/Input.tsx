import cn from 'classnames';
import React, { FC, useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/all';
import { v4 as uuidv4 } from 'uuid';

import { IInput } from './Input.interface';
import styles from './Input.module.scss';

const Input: FC<IInput> = React.forwardRef<HTMLInputElement, IInput>((props, ref) => {
  const {
    className = '',
    id = uuidv4(),
    name = '',
    type,
    error = '',
    label = '',
    placeholder = '',
    isDisabled = false,
    onBlur,
    onChange,
    ...rest
  } = props;

  const isPasswordInput = type === 'password';
  const hasError = !!error;
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const onPasswordVisibilityToggle = () => {
    setIsPasswordShown(!isPasswordShown);
  };

  return (
    <div className={cn(className, styles.container)}>
      <div className={styles.wrapper}>
        {!!label && (
          <label
            className={cn(styles.label, {
              [styles['error']]: hasError
            })}
            htmlFor={id}
          >
            {label}
          </label>
        )}
        <input
          className={cn(styles.input, {
            [styles['error']]: hasError
          })}
          ref={ref}
          id={id}
          disabled={isDisabled}
          name={name}
          type={!isPasswordInput ? type : isPasswordShown ? 'text' : 'password'}
          placeholder={placeholder}
          onChange={onChange}
          onBlur={onBlur}
          {...rest}
        />
        {type === 'password' && (
          <button className={styles.mask} type='button' onClick={onPasswordVisibilityToggle}>
            {isPasswordShown ? <BsEye size='18px' /> : <BsEyeSlash size='18px' />}
          </button>
        )}
      </div>
      {!!error && <div className={styles['error_block']}>{error}</div>}
    </div>
  );
});

export default Input;
