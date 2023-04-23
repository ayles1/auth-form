import cn from 'classnames';
import React, {FC} from 'react';
import ReactDOM from 'react-dom';
import {AiOutlineClose} from 'react-icons/ai';

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
                onClick={(e) => {
                    if (e.target !== e.currentTarget) return;
                    handleClose();
                }}
            >
                <div className={styles.container}>
                    <div className={cn(styles.content, {})}>{children}</div>

                    {isOpen && (
                        <div className={styles.backdrop}>
                            <AiOutlineClose size={'20px'} onClick={handleClose} />
                        </div>
                    )}
                </div>
            </div>,
            document.body
        )
    ) : (
        <></>
    );
};

export default Modal;
