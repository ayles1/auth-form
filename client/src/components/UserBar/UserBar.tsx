import React, { FC } from 'react';
import { AiOutlineUser } from 'react-icons/all';
import { useNavigate } from 'react-router-dom';

import { IUserBar } from '@/components/UserBar/UserBar.interface';
import Button from '@/components/ui/Button/Button';

import styles from './UserBar.module.scss';

const UserBar: FC<IUserBar> = ({ className }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/profile/123');
  };

  return (
    <Button className={className} onClick={handleClick}>
      <AiOutlineUser className={styles.icon} size={30} />
      <div>Profile</div>
    </Button>
  );
};

export default UserBar;
