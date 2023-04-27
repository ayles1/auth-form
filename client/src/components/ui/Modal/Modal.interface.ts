import { Dispatch, ReactNode, SetStateAction } from 'react';


export default interface IModal {
  isOpen: boolean;
  isClosable?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  type?: 'portal' | 'default';
  children: ReactNode;
}