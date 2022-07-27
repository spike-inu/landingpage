import { Alert, AlertColor, AlertTitle, Snackbar, Stack, Typography } from '@mui/material';
import React, { Dispatch, SetStateAction, useState } from 'react';
import { info } from 'utils/log';

export type ToastType = AlertColor;

interface ToastContextProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  setMessage: Dispatch<SetStateAction<string>>;
  setTitle: Dispatch<SetStateAction<string>>;
  setAction: Dispatch<SetStateAction<React.ReactNode>>;
  setType: Dispatch<SetStateAction<ToastType>>;
}

const ToastContext = React.createContext<ToastContextProps>({
  setOpen: () => null,
  setMessage: () => null,
  setTitle: () => null,
  setAction: () => null,
  setType: () => null,
});

const ToastContextProvider: React.FC = (props) => {
  const { children } = props;
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [title, setTitle] = useState('');
  const [action, setAction] = useState(null);
  const [type, setType] = useState<ToastType>('success');

  const handleClose = (params: any) => {
    try {
      if (params.reason === 'clickaway') {
        return;
      }
      setOpen(false);
    } catch (error) {
      info(error);
    }
  };

  return (
    <ToastContext.Provider value={{ setOpen, setMessage, setType, setAction, setTitle }}>
      {children}
      <Snackbar
        open={open}
        autoHideDuration={5000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      >
        <Alert
          variant="filled"
          onClose={handleClose}
          severity={type}
          sx={{ width: '100%', color: 'white', backgroundColor: '#283541' }}
        >
          <AlertTitle>{title ? title : type.toLocaleUpperCase()}</AlertTitle>
          <Stack alignItems="flex-start" spacing={4}>
            <Typography>{message}</Typography>
            {action}
          </Stack>
        </Alert>
      </Snackbar>
    </ToastContext.Provider>
  );
};

export { ToastContext, ToastContextProvider };
