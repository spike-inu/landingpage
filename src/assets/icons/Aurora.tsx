import { IconProps } from './types';
import React from 'react';

const Icon = (props: IconProps) => {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g>
        <path
          d="M26.2035 9.36098C24.5137 6.10114 19.8432 6.12345 18.1846 9.39927L7.34011 30.8176C5.82282 33.8143 8.00043 37.3577 11.3594 37.3577H33.3066C36.6843 37.3577 38.8607 33.7781 37.3062 30.7793L26.2035 9.36098Z"
          stroke="#79CF55"
          strokeWidth="1.63334"
        />
      </g>
    </svg>
  );
};

export default React.memo(Icon);
