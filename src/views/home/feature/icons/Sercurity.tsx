import { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';

const Icon = (props: SvgIconProps) => {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M36.6667 23H13.3333C11.4924 23 10 24.5467 10 26.4545V38.5455C10 40.4533 11.4924 42 13.3333 42H36.6667C38.5076 42 40 40.4533 40 38.5455V26.4545C40 24.5467 38.5076 23 36.6667 23Z"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="transparent"
      />
      <path
        d="M17 23V16.3333C17 14.1232 17.8429 12.0036 19.3431 10.4408C20.8434 8.87797 22.8783 8 25 8C27.1217 8 29.1566 8.87797 30.6569 10.4408C32.1571 12.0036 33 14.1232 33 16.3333V23"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="transparent"
      />
    </svg>
  );
};

export default React.memo(Icon);
