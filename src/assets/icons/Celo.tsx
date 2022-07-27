import { IconProps } from './types';
import React from 'react';

const Icon = (props: IconProps) => {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g>
        <path
          d="M18.2215 37.0538C24.9712 37.0538 30.443 31.5821 30.443 24.8323C30.443 18.0826 24.9712 12.6108 18.2215 12.6108C11.4718 12.6108 6 18.0826 6 24.8323C6 31.5821 11.4718 37.0538 18.2215 37.0538Z"
          stroke="#B38F3C"
          strokeWidth="2"
        />
        <g style={{ mixBlendMode: 'screen' }}>
          <g style={{ mixBlendMode: 'screen' }}>
            <path
              d="M26.4852 30.443C33.2349 30.443 38.7067 24.9712 38.7067 18.2215C38.7067 11.4718 33.2349 6 26.4852 6C19.7354 6 14.2637 11.4718 14.2637 18.2215C14.2637 24.9712 19.7354 30.443 26.4852 30.443Z"
              stroke="#29955E"
              strokeWidth="2"
            />
          </g>
        </g>
      </g>
    </svg>
  );
};

export default React.memo(Icon);
