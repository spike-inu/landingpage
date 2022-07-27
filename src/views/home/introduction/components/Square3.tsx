import { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';

const Icon = (props: SvgIconProps) => {
  return (
    <svg width="97" height="96" viewBox="0 0 97 96" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g filter="url(#filter0_d_763_4445)">
        <path d="M51.5854 63.8417L37.9628 57.9919L32.8937 40.5186L47.7547 46.9002L51.5854 63.8417Z" fill="#84F827" />
        <path d="M62.9051 37.481L48.4728 32.5408L33.1216 39.9879L47.9826 46.3695L62.9051 37.481Z" fill="#78F466" />
        <path d="M48.3615 46.9513L52.1922 63.8927L64.9917 54.0926L63.36 37.8859L48.3615 46.9513Z" fill="#3DAF4F" />
      </g>
      <defs>
        <filter
          id="filter0_d_763_4445"
          x="0.893677"
          y="0.540771"
          width="96.098"
          height="95.3519"
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
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_763_4445" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_763_4445" result="shape" />
        </filter>
      </defs>
    </svg>
  );
};

export default React.memo(Icon);
