import { ToastContext, ToastType } from 'contexts/ToastContext';
import React, { useCallback, useContext } from 'react';

const useToast = () => {
  const { setMessage, setOpen, setType, setAction, setTitle } = useContext(ToastContext);

  const toastRoot = useCallback(
    (message: string, type: ToastType, title?: string, action?: React.ReactNode) => {
      setMessage(message ?? 'Please! Try it again!');
      setTitle(title);
      setType(type);
      setAction(action);
      setOpen(true);
    },
    [setAction, setMessage, setOpen, setTitle, setType],
  );
  const toastSuccess = (message: string, title?: string, action?: React.ReactNode) => {
    return toastRoot(message, 'success', title, action);
  };
  const toastWarning = (message: string, title?: string, action?: React.ReactNode) => {
    return toastRoot(message, 'warning', title, action);
  };
  const toastError = (message: string, title?: string, action?: React.ReactNode) => {
    return toastRoot(message, 'error', title, action);
  };
  const toastInfo = (message: string, title?: string, action?: React.ReactNode) => {
    return toastRoot(message, 'info', title, action);
  };

  return {
    toastSuccess,
    toastError,
    toastWarning,
    toastInfo,
  };
};
export default useToast;
