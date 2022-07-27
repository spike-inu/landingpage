import { IconProps } from './types';
import React from 'react';

const Icon = (props: IconProps) => {
  return (
    <svg width="24" height="20" viewBox="0 0 30 26" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M23.92 26L23.884 10.88L16.468 23.336H13.84L6.46 11.204V26H0.988V0.799998H5.812L15.244 16.46L24.532 0.799998H29.32L29.392 26H23.92Z"
        fill="#C4C4C4"
      />
    </svg>
  );
};

export default React.memo(Icon);
