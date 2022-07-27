import { IconProps } from './types';
import React from 'react';

const Icon = (props: IconProps) => {
  return (
    <svg width="44" height="44" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M10.2263 29.4141C10.4163 29.219 10.733 29.0889 11.0497 29.0889H39.1069C39.6136 29.0889 39.8669 29.7393 39.4869 30.1295L33.9135 35.8527C33.7234 36.0479 33.4068 36.1779 33.0901 36.1779H5.09617C4.58949 36.1779 4.33617 35.5276 4.71618 35.1373L10.2263 29.4141Z"
        fill="url(#paint0_linear_32_356)"
        fillOpacity="0.92"
      />
      <path
        d="M10.2263 8.14745C10.4163 7.95234 10.733 7.82227 11.0496 7.82227H39.1069C39.6136 7.82227 39.8669 8.47263 39.4869 8.86285L33.9134 14.5861C33.7234 14.7812 33.4068 14.9112 33.0901 14.9112H5.09617C4.58949 14.9112 4.33617 14.2609 4.71617 13.8707L10.2263 8.14745Z"
        fill="url(#paint1_linear_32_356)"
        fillOpacity="0.92"
      />
      <path
        d="M33.9768 18.6831C33.7868 18.488 33.4701 18.3579 33.1534 18.3579H5.09617C4.58949 18.3579 4.33617 19.0083 4.71618 19.3985L10.2896 25.1217C10.4796 25.3168 10.7963 25.4469 11.113 25.4469H39.1702C39.6769 25.4469 39.9302 24.7966 39.5502 24.4063L33.9768 18.6831Z"
        fill="url(#paint2_linear_32_356)"
        fillOpacity="0.92"
      />
      <defs>
        <linearGradient
          id="paint0_linear_32_356"
          x1="22.1332"
          y1="7.82234"
          x2="22.1332"
          y2="36.1779"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#14E6AD" />
          <stop offset="1" stopColor="#A964DE" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_32_356"
          x1="22.1332"
          y1="7.82227"
          x2="22.1332"
          y2="36.1778"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#14E6AD" />
          <stop offset="1" stopColor="#A964DE" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_32_356"
          x1="22.1332"
          y1="7.82248"
          x2="22.1332"
          y2="36.178"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#14E6AD" />
          <stop offset="1" stopColor="#A964DE" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default React.memo(Icon);
