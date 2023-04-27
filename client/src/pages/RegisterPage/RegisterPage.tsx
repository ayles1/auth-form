import React, { FC } from 'react';
import { Outlet } from 'react-router-dom';

import RegisterForm from '@/components/RegisterForm/RegisterForm';
import Modal from '@/components/ui/Modal/Modal';

const RegisterPage: FC = () => {
  return (
    <>
      <Outlet />
      <Modal isOpen={true} isClosable={false} type='default'>
        <RegisterForm />
      </Modal>
    </>
  );
};

export default RegisterPage;
