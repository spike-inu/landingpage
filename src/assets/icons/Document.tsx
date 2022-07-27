import React from 'react';
import { IconProps } from './types';

const Icon = (props: IconProps) => {
  return (
    <svg width="18" height="23" viewBox="0 0 18 23" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M1.97754 22.5H15.1611C16.2516 22.5 17.1387 21.6129 17.1387 20.5225V6.5918H12.5244C11.434 6.5918 10.5469 5.70472 10.5469 4.61426V0H1.97754C0.88708 0 0 0.88708 0 1.97754V20.5225C0 21.6129 0.88708 22.5 1.97754 22.5ZM4.61426 9.27246H12.5244C12.8888 9.27246 13.1836 9.56729 13.1836 9.93164C13.1836 10.296 12.8888 10.5908 12.5244 10.5908H4.61426C4.24991 10.5908 3.95508 10.296 3.95508 9.93164C3.95508 9.56729 4.24991 9.27246 4.61426 9.27246ZM4.61426 11.9092H12.5244C12.8888 11.9092 13.1836 12.204 13.1836 12.5684C13.1836 12.9327 12.8888 13.2275 12.5244 13.2275H4.61426C4.24991 13.2275 3.95508 12.9327 3.95508 12.5684C3.95508 12.204 4.24991 11.9092 4.61426 11.9092ZM4.61426 14.5459H12.5244C12.8888 14.5459 13.1836 14.8407 13.1836 15.2051C13.1836 15.5694 12.8888 15.8643 12.5244 15.8643H4.61426C4.24991 15.8643 3.95508 15.5694 3.95508 15.2051C3.95508 14.8407 4.24991 14.5459 4.61426 14.5459ZM4.61426 17.1826H9.8877C10.252 17.1826 10.5469 17.4774 10.5469 17.8418C10.5469 18.2061 10.252 18.501 9.8877 18.501H4.61426C4.24991 18.501 3.95508 18.2061 3.95508 17.8418C3.95508 17.4774 4.24991 17.1826 4.61426 17.1826Z"
        fill="#f8f187"
      />
      <path
        d="M12.5244 5.27331H16.7524L11.8652 0.386108V4.61413C11.8652 4.97782 12.1607 5.27331 12.5244 5.27331Z"
        fill="#f8f187"
      />
    </svg>
  );
};

export default React.memo(Icon);