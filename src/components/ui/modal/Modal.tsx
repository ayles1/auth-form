import cn from 'classnames';
import React, { FC } from 'react';
import ReactDOM from 'react-dom';

import IModal from './modal.interface';
import styles from './modal.module.scss';


const Modal: FC<IModal> = ({ isOpen, setIsOpen, children }) => {
    const handleClose = () => {
        setIsOpen(false);
    };
    return isOpen ? (
        ReactDOM.createPortal(
            <div
                className={cn(styles.modal, {
                    [styles['open']]: isOpen
                })}
            >
                <div className={cn(styles.content, {})}>{children}</div>
                {isOpen && (
                    <div className={styles.backdrop} onClick={handleClose}>
                        Закрыть
                    </div>
                )}
            </div>,
            document.body
        )
    ) : (
        <></>
    );
};

export default Modal;