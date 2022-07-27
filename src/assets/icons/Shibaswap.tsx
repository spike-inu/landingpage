import { IconProps } from './types';
import React from 'react';

const Icon = (props: IconProps) => {
  return (
    <svg
      width="44"
      height="44"
      viewBox="0 0 44 44"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      {...props}
    >
      <rect width="44" height="44" fill="url(#patternShiba)" />
      <defs>
        <pattern id="patternShiba" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#shiba" transform="scale(0.000849618)" />
        </pattern>
        <image
          id="shiba"
          width="1177"
          height="1177"
        />
      </defs>
    </svg>
  );
};

export default React.memo(Icon);