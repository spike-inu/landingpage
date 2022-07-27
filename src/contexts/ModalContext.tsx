/* eslint-disable no-unused-vars */
import { Container, Modal } from '@mui/material';
import React, { Dispatch, SetStateAction, useCallback, useState } from 'react';

interface ModalContextProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
  modalNode: React.ReactNode;
  setModalNode: Dispatch<SetStateAction<React.ReactNode>>;
}
const ModalContext = React.createContext<ModalContextProps>({
  setOpen: () => null,
  modalNode: null,
  setModalNode: () => null,
});

const ModalContextProvider: React.FC = (props) => {
  const { children } = props;
  const [open, setOpen] = useState(false);
  const [modalNode, setModalNode] = useState<React.ReactNode>(null);

  const handleClose = useCallback(() => {
    setOpen(false);
  }, []);
  return (
    <ModalContext.Provider value={{ modalNode, setOpen, setModalNode }}>
      {children}
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-video" aria-describedby="modal-video">
        <Container
          onClick={() => {
            setOpen(false);
          }}
          sx={{ minHeight: '100vh', justifyContent: 'center', alignItems: 'center', display: 'flex' }}
        >
          {modalNode}
        </Container>
      </Modal>
    </ModalContext.Provider>
  );
};

export { ModalContextProvider, ModalContext };
