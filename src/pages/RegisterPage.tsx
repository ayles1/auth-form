import React, { FC } from 'react';

import RegisterForm from '@/components/registerForm/RegisterForm';
import Modal from '@/components/ui/modal/Modal';


const RegisterPage: FC<any> = () => {
    return (
        <>
            <Modal isOpen={true}>
                <RegisterForm />
            </Modal>
        </>
    );
};

export default RegisterPage;