import cn from 'classnames';
import React, { FC } from 'react';
import ReactDOM from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';

import IModal from './Modal.interface';
import styles from './Modal.module.scss';

const Modal: FC<IModal> = ({
  isOpen,
  setIsOpen,
  isClosable = false,
  type = 'portal',
  children
}) => {
  const isOpened = isOpen && isClosable;
  const isPortal = type === 'portal';

  const handleClose = () => {
    if (!!setIsOpen) {
      setIsOpen(false);
    }
  };

  const renderModal = () => {
    return (
      <div
        className={cn(styles.modal, {
          [styles['open']]: isOpen,
          [styles['portal']]: isPortal,
          [styles['default']]: !isPortal
        })}
        onClick={(e) => {
          if (e.target !== e.currentTarget) return;
          handleClose();
        }}
      >
        <div className={styles.container}>
          <div className={cn(styles.content, {})}>{children}</div>

          {isOpened && (
            <div className={styles.backdrop}>
              <AiOutlineClose size='20px' onClick={handleClose} />
            </div>
          )}
        </div>
      </div>
    );
  };
  return isOpen ? (
    type === 'portal' ? (
      ReactDOM.createPortal(renderModal(), document.body)
    ) : (
      renderModal()
    )
  ) : (
    <></>
  );
};

export default Modal;