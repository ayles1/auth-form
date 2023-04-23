import React, {useState} from 'react';

import LoginForm from '@/components/loginForm/LoginForm';
import Modal from '@/components/ui/modal/Modal';

const LoginPage = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <>
            <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
                <LoginForm />
            </Modal>
        </>
    );
};

export default LoginPage;
