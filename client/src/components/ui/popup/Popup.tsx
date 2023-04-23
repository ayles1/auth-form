import cn from 'classnames';
import React, {FC, useEffect, useState} from 'react';
import {createPortal} from 'react-dom';
import {AiOutlineClose} from 'react-icons/ai';

import {popupActions} from '@/store/slices/popupSlice';

import useAppDispatch from '@/hooks/redux/useAppDispatch';
import useTypedSelector from '@/hooks/redux/useTypedSelector';

import IPopup from './popup.interface';
import styles from './popup.module.scss';

const Popup: FC<IPopup> = (props) => {
    const {
        autoCloseTime = 4000,
        position,
        type = 'success',
        variant = 'contained',
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
    console.log('hey');
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

    return isOpen
        ? createPortal(
              <>
                  <div
                      className={cn(styles.popup, styles[position], styles[type], styles[variant])}
                  >
                      <div className={styles.wrapper}>
                          <div className={styles.container}>
                              <div className={styles.message}>{message}</div>
                              <div className={styles.backdrop}>
                                  <AiOutlineClose size={'20px'} onClick={() => toggleOpen(false)} />
                              </div>
                          </div>
                          <div className={styles.top} style={topStyle} />
                          <div className={styles.right} style={rightStyle} />
                          <div className={styles.bottom} style={bottomStyle} />
                          <div className={styles.left} style={leftStyle} />
                      </div>
                  </div>
              </>,
              document.body
          )
        : null;
};

export default Popup;
