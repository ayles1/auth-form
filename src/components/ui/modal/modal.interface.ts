import { ReactNode } from 'react';

export default interface IModal {
    isOpen: boolean;
    children: ReactNode;
}