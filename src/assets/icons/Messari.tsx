import React from 'react';
import { IconProps } from './types';

const Icon = (props: IconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={36} height={36} xmlSpace="preserve" {...props}>
      <path
        style={{
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          fill: '#2471b9',
        }}
        d="M26.859 9.523 36 0v27.586l-9.141 8.302z"
      />
      <path
        style={{
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          fill: '#458cca',
        }}
        d="m13.429 14.347 4.409 3.597 4.733-4.151v13.793l-9.142 8.302z"
      />
      <path
        style={{
          fillRule: 'evenodd',
          clipRule: 'evenodd',
          fill: '#75b5e3',
        }}
        d="M9.141 9.523 0 0v36l9.141-7.741z"
      />
    </svg>
  );
};

export default React.memo(Icon);
