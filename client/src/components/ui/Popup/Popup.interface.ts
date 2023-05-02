interface IPopup<T extends 'error' | 'success' | 'warn'> {
  autoCloseTime?: number | false;
  type: T;
  variant?: 'contained' | 'outlined';
  position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
  message: string;
  statusCode: T extends 'error' ? number : undefined;
}
export default IPopup;
