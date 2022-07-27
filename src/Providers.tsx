import { ModalContextProvider } from 'contexts/ModalContext';
import ThemeContext from 'contexts/ThemeContext';
import { ToastContextProvider } from 'contexts/ToastContext';
import React from 'react';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const Providers: React.FC = ({ children }) => {
  return (
    <ThemeContext>
      <ToastContextProvider>
        <ModalContextProvider>{children}</ModalContextProvider>
      </ToastContextProvider>
    </ThemeContext>
  );
};

export default Providers;
