import { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';

const Icon = (props: SvgIconProps) => {
  return (
    <svg width="117" height="115" viewBox="0 0 117 115" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g filter="url(#filter0_d_763_4441)">
        <path d="M53.0362 32.3236L75.2688 40.5979L84.7485 68.1229L60.4948 59.0965L53.0362 32.3236Z" fill="#84F827" />
        <path d="M37.0252 75.345L60.48 82.1017L84.4263 68.989L60.1726 59.9626L37.0252 75.345Z" fill="#78F466" />
        <path d="M59.5212 59.0627L52.0627 32.2899L32.3802 48.9618L36.2664 74.7339L59.5212 59.0627Z" fill="#3DAF4F" />
      </g>
      <defs>
        <filter
          id="filter0_d_763_4441"
          x="0.380127"
          y="0.289917"
          width="116.368"
          height="113.812"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="16" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.996078 0 0 0 0 0.223529 0 0 0 1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_763_4441" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_763_4441" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

export default React.memo(Icon);
