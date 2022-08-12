import { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';

const Icon = (props: SvgIconProps) => {
  return (
    <svg width="134" height="135" viewBox="0 0 134 135" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g filter="url(#filter0_d_763_4437)">
        <path d="M100.735 77.8678L77.7956 102.101L36.9469 99.2356L61.9716 72.7998L100.735 77.8678Z" fill="#84F827" />
        <path d="M53.843 33.4789L32.1961 60.1286L36.0027 98.3421L61.0275 71.9063L53.843 33.4789Z" fill="#78F466" />
        <path d="M62.5506 71.5579L101.314 76.6258L90.5545 41.975L55.0514 32.8326L62.5506 71.5579Z" fill="#3DAF4F" />
      </g>
      <defs>
        <filter
          id="filter0_d_763_4437"
          x="0.196045"
          y="0.83252"
          width="133.118"
          height="133.268"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_763_4437" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_763_4437" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

export default React.memo(Icon);
