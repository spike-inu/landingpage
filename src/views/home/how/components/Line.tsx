import React from 'react';

const Icon = (props) => {
  return (
    <svg width="2" height="306" viewBox="0 0 2 306" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1 306L1.00001 7.27177e-06" stroke="url(#paint0_linear_763_5240)" strokeWidth="2" />
      <defs>
        <linearGradient
          id="paint0_linear_763_5240"
          x1="0.5"
          y1="306"
          x2="0.500013"
          y2="-2.18557e-08"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#84F827" stopOpacity="0" />
          <stop offset="0.53125" stopColor="#84F827" />
          <stop offset="1" stopColor="#84F827" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default React.memo(Icon);
