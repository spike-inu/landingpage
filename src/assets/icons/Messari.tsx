import React from 'react';
import { IconProps } from './types';

const Icon = (props: IconProps) => {
  return (
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="36px"
      height="36px"
      viewBox="0 0 36 36"
      // style="enable-background:new 0 0 36 36;"
      xmlSpace="preserve"
      {...props}
    >
      <g>
        <polygon className="st0" points="26.859,9.523 36,0 36,27.586 26.859,35.888 	" fill="#2471B9" />
        <polygon
          className="st1"
          points="13.429,14.347 17.838,17.944 22.571,13.793 22.571,27.586 13.429,35.888 	"
          fill="#458CCA"
        />
        <polygon className="st2" points="9.141,9.523 0,0 0,36 9.141,28.259 	" fill="#75B5E3" />
      </g>
    </svg>
  );
};

export default React.memo(Icon);
