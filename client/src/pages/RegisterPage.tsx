import React, { FC, useState } from 'react';
import { Outlet } from 'react-router-dom';

import RegisterForm from '@/components/registerForm/RegisterForm';
import Modal from '@/components/ui/modal/Modal';

const RegisterPage: FC<any> = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            <Outlet />
            <Modal isOpen={isOpen} isClosable={false} type={'default'}>
                <RegisterForm />
            </Modal>
        </>
    );
};

export default RegisterPage;