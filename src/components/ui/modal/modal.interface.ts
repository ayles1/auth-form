import { Dispatch, ReactNode, SetStateAction } from 'react';

export default interface IModal {
    isOpen: boolean;
    setIsOpen: Dispatch<SetStateAction<boolean>>;
    children: ReactNode;
}