import { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';

const Icon = (props: SvgIconProps) => {
  return (
    <svg width="136" height="151" viewBox="0 0 136 151" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g>
        <path
          d="M111 100.25V50.75L68.0046 26L25 50.75V100.25L68.0046 125L111 100.25Z"
          stroke="#91FE39"
          strokeWidth="6"
          strokeMiterlimit="10"
        />
      </g>
      <circle cx="68" cy="76" r="23.5" stroke="#91FE39" strokeWidth="3" />
      <circle cx="68" cy="76" r="18.5" stroke="#91FE39" strokeWidth="3" strokeDasharray="3 3" />
      <path
        d="M57.7918 83.4001L73.3359 66.132C73.3359 66.132 74.8199 64.3037 77.7123 65.2941C79.9998 66.0773 79.9381 68.4638 79.9381 68.4638C79.9381 68.4638 79.9992 76.4606 79.9992 79.7939C80.0463 82.3372 78.0421 83.8931 76.2785 83.9454C74.3921 84.0013 73.1525 82.6648 72.0689 81.8503C71.7207 81.5884 68.2801 79.0291 68.2801 79.0291L61.4137 85.1853L69.2988 76.3807C69.2988 76.3807 73.2716 79.5793 74.9772 80.8869C75.6183 81.3787 77.2596 81.8705 77.2221 80.1947C77.2221 78.3369 77.2221 72.6534 77.2221 68.9378C77.2596 67.6628 76.015 67.0616 74.9772 68.2819C73.2792 70.1034 63.7344 80.8193 60.5523 84.4655C58.3953 87.1532 55 86.0429 55 83.2003C55 81.3425 55 78.0633 55.0076 75.5022C54.8682 73.2731 57.7166 71.6335 60.0933 73.6008C61.0929 74.4571 62.1873 75.3492 62.1873 75.3492L68.9219 69.156L61.1527 77.8838L57.7536 75.2397L57.7918 83.4001Z"
        fill="#91FE39"
      />
    </svg>
  );
};

export default React.memo(Icon);
