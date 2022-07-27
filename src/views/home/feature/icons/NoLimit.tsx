import { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';

const Icon = (props: SvgIconProps) => {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M25.0001 45.8332C36.506 45.8332 45.8334 36.5058 45.8334 24.9998C45.8334 13.4939 36.506 4.1665 25.0001 4.1665C13.4941 4.1665 4.16675 13.4939 4.16675 24.9998C4.16675 36.5058 13.4941 45.8332 25.0001 45.8332Z"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="transparent"
      />
      <path
        d="M25 12.5V25L33.3333 29.1667"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="transparent"
      />
    </svg>
  );
};

export default React.memo(Icon);
