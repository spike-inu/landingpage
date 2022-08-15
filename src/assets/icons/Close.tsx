import { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';

const Icon = (props: SvgIconProps) => {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M13 13L1 1M13 1L1 13" stroke="#F6F6F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default React.memo(Icon);
