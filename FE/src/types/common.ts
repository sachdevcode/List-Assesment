export interface ToastProps {
    message: string;
    type: 'success' | 'error' | 'info';
  }
  
  export interface ToastHandle {
    show: () => void;
  }