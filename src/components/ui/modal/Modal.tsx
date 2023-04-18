import React, { FC } from 'react';
import ReactDOM from 'react-dom';

import IModal from './modal.interface';
import styles from './modal.module.scss';


const Modal: FC<IModal> = ({ isOpen, children }) => {
    return isOpen ? (
        ReactDOM.createPortal(
            <div className={styles.modal}>
                <div className={styles.content}>{children}</div>
            </div>,
            document.body
        )
    ) : (
        <></>
    );
};

export default Modal;