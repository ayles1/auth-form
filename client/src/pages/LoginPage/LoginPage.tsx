import React, { FC } from 'react';

import LoginForm from '@/components/LoginForm/LoginForm';
import Modal from '@/components/ui/Modal/Modal';

const LoginPage: FC = () => {
  return (
    <>
      <Modal isOpen={true} isClosable={false} type='default'>
        <LoginForm />
      </Modal>
    </>
  );
};

export default LoginPage;
