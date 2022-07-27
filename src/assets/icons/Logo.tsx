import { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';

const Icon = (props: SvgIconProps) => {
  return (
    <svg width="47" height="42" viewBox="0 0 47 42" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M5.24852 35.9298L34.4714 2.21053C34.4714 2.21053 37.2615 -1.35959 42.6991 0.574324C46.9997 2.10369 46.8836 6.76382 46.8836 6.76382C46.8836 6.76382 46.9985 22.3792 46.9985 28.888C47.087 33.8543 43.3191 36.8926 40.0036 36.9946C36.4571 37.1039 34.1267 34.4941 32.0896 32.9035C31.4349 32.3921 24.9667 27.3947 24.9667 27.3947L12.0578 39.4159L26.8817 22.2231C26.8817 22.2231 34.3506 28.4691 37.5571 31.0224C38.7624 31.9828 41.8481 32.9431 41.7775 29.6707C41.7775 26.043 41.7775 14.9449 41.7775 7.68936C41.8481 5.19964 39.5081 4.0256 37.5571 6.40849C34.3649 9.96541 16.4206 30.8904 10.4384 38.0102C6.3832 43.2585 0 41.0905 0 35.5397C0 31.9119 3.06861e-06 25.5088 0.0143662 20.5077C-0.24776 16.1549 5.10728 12.9533 9.5754 16.7947C11.4546 18.467 13.5121 20.2088 13.5121 20.2088L26.1732 8.11552L11.5671 25.1582L5.1767 19.9951L5.24852 35.9298Z"
        fill="#91FE39"
      />
    </svg>
  );
};

export default React.memo(Icon);
