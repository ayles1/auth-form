import React from 'react';

import AuthForm from '@/components/authForm/AuthForm';
import Modal from '@/components/ui/modal/Modal';

const LoginPage = () => {
    return (
        <>
            <Modal isOpen={true}>
                <AuthForm />
            </Modal>
        </>
    );
};

export default LoginPage;