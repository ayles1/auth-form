import cn from 'classnames';
import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';
import { AiOutlineClose } from 'react-icons/ai';

import { popupActions } from '@/store/slices/popup/popup.slice';

import useAppDispatch from '@/hooks/redux/useAppDispatch';
import useTypedSelector from '@/hooks/redux/useTypedSelector';

import IPopup from './Popup.interface';
import styles from './Popup.module.scss';

const Popup = <T extends 'success' | 'error' | 'warn'>(props: IPopup<T>) => {
  const {
    autoCloseTime = 4000,
    position,
    type = 'success',
    variant = 'contained',
    statusCode,
    message
  } = props;
  const { isOpen } = useTypedSelector((state) => state.popup);
  const { toggleOpen } = useAppDispatch(popupActions);
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    if (loadingPercentage === 100) {
      toggleOpen(false);
    }
  }, [loadingPercentage]);
  useEffect(() => {
    if (autoCloseTime === false) {
      return;
    } else if (loadingPercentage === 100) {
      toggleOpen(false);
    } else {
      const interval = setInterval(() => {
        setLoadingPercentage(loadingPercentage + 1);
      }, autoCloseTime / 100);
      return () => {
        clearInterval(interval);
      };
    }
  }, [loadingPercentage]);

  const topStyle = { width: `${loadingPercentage}%` };
  const rightStyle = { height: `${loadingPercentage}%` };
  const bottomStyle = { width: `${loadingPercentage}%` };

  const leftStyle = { height: `${loadingPercentage}%` };

  if (isOpen)
    return createPortal(
      <div className={cn(styles.popup, styles[position], styles[type], styles[variant])}>
        <div className={styles.wrapper}>
          <div className={styles.container}>
            <div>
              <div className={styles.status}>Status - {statusCode}</div>
              <div className={styles.message}>{message}</div>
            </div>

            <div className={styles.backdrop}>
              <AiOutlineClose size='20px' onClick={() => toggleOpen(false)} />
            </div>
          </div>
          <div className={styles.top} style={topStyle} />
          <div className={styles.right} style={rightStyle} />
          <div className={styles.bottom} style={bottomStyle} />
          <div className={styles.left} style={leftStyle} />
        </div>
      </div>,
      document.body
    );
  return null;
};

export default Popup;
