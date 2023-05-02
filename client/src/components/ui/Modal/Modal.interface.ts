import { Dispatch, ReactNode, SetStateAction } from 'react';

interface IModal {
  isOpen: boolean;
  isClosable?: boolean;
  setIsOpen?: Dispatch<SetStateAction<boolean>>;
  type?: 'portal' | 'default';
  children: ReactNode;
}
export default IModal;
