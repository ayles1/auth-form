import { AppRoutes } from '@/types';
import React, { FC, useEffect } from 'react';



import Button from '@/components/ui/Button/Button';

import { userActions } from '@/store/slices/user/user.slice';

import useAppDispatch from '@/hooks/redux/useAppDispatch';
import useTypedSelector from '@/hooks/redux/useTypedSelector';

import styles from './Activation.module.scss';

const Activation: FC = () => {
  const { isActivated, id } = useTypedSelector((state) => state.user);

  const { activateUser } = useAppDispatch(userActions);

  useEffect(() => {
    return () => {
      activateUser();
    };
  }, []);
  return (
    <div className={styles.container}>
      {isActivated && (
        <>
          <div>Your account has been activated!</div>
          <Button link={AppRoutes.index}>Go back to main page</Button>
        </>
      )}
    </div>
  );
};

export default Activation;