export default interface IPopup {
    autoCloseTime?: number | false;
    type?: 'error' | 'success' | 'warn';
    variant?: 'contained' | 'outlined';
    position: 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
    message: string;
}
