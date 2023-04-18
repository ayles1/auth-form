import cn from 'classnames';
import React, { FC, useState } from 'react';
import { BsEye, BsEyeSlash } from 'react-icons/bs';

import { IInput } from './input.interface';
import styles from './input.module.scss';


const Input: FC<IInput> = React.forwardRef<HTMLInputElement, IInput>((props, ref) => {
    const {
        className = '',
        id = Math.random().toString(),
        name = '',
        type,
        error = '',
        label = '',
        placeholder = '',
        isDisabled = false,
        onChange,
        onBlur,
        ...rest
    } = props;

    const isPasswordInput = type === 'password';
    const hasError = !!error;
    const [isPasswordShown, setIsPasswordShown] = useState(false);
    const onPasswordVisibilityToggle = () => {
        setIsPasswordShown(!isPasswordShown);
    };

    return (
        <>
            <div className={styles.container}>
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
                    className={cn(className, styles.input, {
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
                    <button className={styles.mask} onClick={onPasswordVisibilityToggle}>
                        {isPasswordShown ? <BsEye size={'18px'} /> : <BsEyeSlash size={'18px'} />}
                    </button>
                )}
                {!!error && <div className={styles.error_block}>{error}</div>}
            </div>
        </>
    );
});

export default Input;