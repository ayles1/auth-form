import { MouseEventHandler, ReactNode } from 'react';


export interface IButton {
    className?: string;
    children?: ReactNode;
    variant?: 'contained' | 'outlined';
    link?: string;
    target?: '_self' | '_blank';
    onClick?: MouseEventHandler;
}