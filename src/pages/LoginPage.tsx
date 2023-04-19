import React, { useState } from 'react';

import LoginForm from '@/components/authForm/AuthForm';
import Modal from '@/components/ui/modal/Modal';


const LoginPage = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button onClick={() => setIsOpen(!isOpen)}> Открыть модалку</button>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <LoginForm type={'login'} />
            </Modal>
        </>
    );
};

export default LoginPage;