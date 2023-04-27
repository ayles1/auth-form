import { FocusEventHandler, FormEventHandler, HTMLAttributes } from 'react';


export interface IInput extends HTMLAttributes<HTMLInputElement> {
  id?: string;
  name?: string;
  type: 'text' | 'email' | 'tel' | 'date' | 'password';
  error?: string;
  label?: string;
  placeholder?: string;
  isDisabled?: boolean;
  className?: string;
  onChange?: FormEventHandler;
  onBlur?: FocusEventHandler;
}