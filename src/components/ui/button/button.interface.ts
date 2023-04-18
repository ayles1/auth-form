import { MouseEventHandler, ReactNode } from 'react';

export interface IButton {
    className?: string;
    children?: ReactNode;
    variant: 'contained' | 'outlined';
    onClick?: MouseEventHandler;
}