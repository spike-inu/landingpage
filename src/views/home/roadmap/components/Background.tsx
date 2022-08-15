import { IconProps } from 'assets/icons/types';

const Background = (props: IconProps) => {
  return (
    <svg width="475" height="682" viewBox="0 0 475 682" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <circle
        r="278.5"
        transform="matrix(1 0 0 -1 341 341)"
        stroke="url(#paint0_linear_40_5613)"
        strokeOpacity="0.8"
        strokeWidth="125"
      />
      <g filter="url(#filter0_d_40_5613)">
        <path
          d="M283.003 450.544L533.574 161.921C533.574 161.921 557.497 131.362 604.122 147.916C640.997 161.007 640.002 200.895 640.002 200.895C640.002 200.895 640.987 334.557 640.987 390.269C641.746 432.778 609.438 458.785 581.01 459.658C550.601 460.593 530.619 438.255 513.151 424.64C507.537 420.263 452.076 377.487 452.076 377.487L341.389 480.384L468.497 333.221C468.497 333.221 532.538 386.683 560.032 408.539C570.367 416.759 596.825 424.979 596.22 396.969C596.22 365.917 596.22 270.922 596.22 208.818C596.825 187.507 576.761 177.457 560.032 197.854C532.661 228.3 378.798 407.408 327.504 468.351C292.733 513.275 238 494.718 238 447.205C238 416.153 238 361.344 238.123 318.537C235.876 281.279 281.792 253.875 320.104 286.756C336.217 301.069 353.859 315.979 353.859 315.979L462.421 212.465L337.182 358.344L282.387 314.15L283.003 450.544Z"
          fill="#91FE39"
          fillOpacity="0.1"
          shapeRendering="crispEdges"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_40_5613"
          x="205"
          y="110"
          width="469"
          height="417"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="16.5" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0.568627 0 0 0 0 0.996078 0 0 0 0 0.223529 0 0 0 0.1 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_40_5613" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_40_5613" result="shape" />
        </filter>
        <linearGradient id="paint0_linear_40_5613" x1="341" y1="0" x2="341" y2="682" gradientUnits="userSpaceOnUse">
          <stop stop-color="#1F2022" />
          <stop offset="0.796875" stopColor="#1F2022" stopOpacity="0" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export default Background;
