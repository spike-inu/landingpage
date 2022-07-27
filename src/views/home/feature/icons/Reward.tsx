import { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';

const Icon = (props: SvgIconProps) => {
  return (
    <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M25.3921 6.37305V43.373" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M33.6421 13.373H20.5171C18.8926 13.373 17.3347 13.9788 16.1861 15.0572C15.0374 16.1355 14.3921 17.5981 14.3921 19.123C14.3921 20.648 15.0374 22.1106 16.1861 23.1889C17.3347 24.2672 18.8926 24.873 20.5171 24.873H29.2671C30.8915 24.873 32.4495 25.4788 33.5981 26.5572C34.7468 27.6355 35.3921 29.0981 35.3921 30.623C35.3921 32.148 34.7468 33.6106 33.5981 34.6889C32.4495 35.7672 30.8915 36.373 29.2671 36.373H14.3921"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="transparent"
      />
    </svg>
  );
};

export default React.memo(Icon);
