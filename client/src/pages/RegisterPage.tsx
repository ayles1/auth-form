import React, {FC, useState} from 'react';

import RegisterForm from '@/components/registerForm/RegisterForm';
import Modal from '@/components/ui/modal/Modal';
import {Outlet} from "react-router-dom";

const RegisterPage: FC<any> = () => {
    const [isOpen, setIsOpen] = useState(true);
    return (
        <>
            <Outlet/>
            <Modal setIsOpen={setIsOpen} isOpen={isOpen}>
                <RegisterForm />
            </Modal>
        </>
    );
};

export default RegisterPage;
