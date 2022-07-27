import { ModalContext } from 'contexts/ModalContext';
import React, { useContext, useEffect } from 'react';

const useModal = (node: React.ReactNode) => {
  const { setModalNode, setOpen } = useContext(ModalContext);
  const show = () => {
    setModalNode(node);
    setOpen(true);
  };
  const hide = () => {
    setOpen(false);
  };
  useEffect(() => {
    setModalNode(node);
  }, [node, setModalNode]);

  return [show, hide];
};

export default useModal;
