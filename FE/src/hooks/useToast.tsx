import { useState, useCallback } from 'react';
import "../styles/toast.css"
import { ToastProps } from '../types/common';


export const useToast = () => {
  const [toast, setToast] = useState<ToastProps | null>(null);

  const triggerToast = useCallback((message: string, type: 'success' | 'error' | 'info') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000); 
  }, []);

  const Toast = () => (
    toast ? (
      <div className={`toast toast-${toast.type}`}>
        <p>{toast.message}</p>
      </div>
    ) : null
  );

  return { Toast, triggerToast };
};
