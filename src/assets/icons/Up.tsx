import { IconProps } from './types';
import React from 'react';

const Icon = (props: IconProps) => {
  return (
    <svg width="18" height="10" viewBox="0 0 18 10" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M17.4851 8.5348L9.00013 0.0498047L0.515137 8.5348L1.92914 9.94981L9.00013 2.8778L16.0711 9.94981L17.4851 8.5348Z"
        fill="white"
      />
    </svg>
  );
};

export default React.memo(Icon);
