import { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';

const Icon = (props: SvgIconProps) => {
  return (
    <svg width="18" height="12" viewBox="0 0 18 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M18 12H0V10H18V12ZM18 7H0V5H18V7ZM18 2H0V0H18V2Z" fill="#F6F6F6" />
    </svg>
  );
};

export default React.memo(Icon);
