import { IconProps } from './types';
import React from 'react';

const Icon = (props: IconProps) => {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g>
        <path d="M32.8902 21.3256L21.8242 2.93359V16.2537L32.8902 21.3256Z" fill="#AEB6FC" />
        <path opacity="0.8" d="M21.8228 16.2547V2.93457L10.7568 21.3266L21.8228 16.2547Z" fill="#AEB6FC" />
        <path d="M21.8242 31.522V40.5387L32.8902 24.9644L21.8242 31.522Z" fill="#AEB6FC" />
        <path opacity="0.9" d="M10.7559 24.9644L21.8218 40.5387V31.522L10.7559 24.9644Z" fill="#AEB6FC" />
        <path d="M21.8242 27.8312L32.8902 21.3248L21.8242 16.2529V27.8312Z" fill="#AEB6FC" />
        <path opacity="0.7" d="M21.8218 16.2529L10.7559 21.3248L21.8218 27.8312V16.2529Z" fill="#AEB6FC" />
      </g>
    </svg>
  );
};

export default React.memo(Icon);
