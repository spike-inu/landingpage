import { IconProps } from './types';
import React from 'react';

const Icon = (props: IconProps) => {
  return (
    <svg width="37" height="32" viewBox="0 0 37 32" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M6.00505 18.5695C5.93132 18.9195 5.87984 19.2739 5.87984 19.6364C5.87984 24.0475 11.6276 27.6364 18.5559 27.6364C25.4842 27.6364 31.1203 24.0475 31.1203 19.6364C31.1203 19.2739 31.0688 18.9195 30.995 18.5695C32.0813 18.0779 32.7955 17.1068 32.7955 16C32.7955 14.3957 31.2928 13.0909 29.445 13.0909C28.6006 13.0909 27.8073 13.3657 27.1989 13.8449C25.0935 12.5705 22.3001 11.7599 19.2116 11.6576L20.8144 6.25929L24.4291 7.3574C24.4821 8.92198 25.9553 10.1818 27.7698 10.1818C29.6175 10.1818 31.1203 8.87709 31.1203 7.27274C31.1203 5.66838 29.6175 4.36365 27.7698 4.36365C26.4815 4.36365 25.3738 5.00494 24.8134 5.93278L19.6479 4.36441L17.477 11.6712C14.5558 11.8303 11.8104 12.6286 9.80119 13.8449C9.19282 13.3657 8.39947 13.0909 7.55509 13.0909C5.7073 13.0909 4.20459 14.3957 4.20459 16C4.20459 17.1068 4.91875 18.0779 6.00505 18.5695ZM23.5816 16C24.9672 16 26.0945 16.9788 26.0945 18.1818C26.0945 19.3849 24.9672 20.3636 23.5816 20.3636C22.1961 20.3636 21.0688 19.3849 21.0688 18.1818C21.0688 16.9788 22.1961 16 23.5816 16ZM23.2235 22.4248L23.9398 23.7386C22.3677 24.3856 20.506 24.7273 18.5559 24.7273C16.6058 24.7273 14.6324 24.3856 13.0603 23.7386L13.7766 22.4246C16.4762 23.5341 20.5239 23.5341 23.2235 22.4248ZM13.4185 16C14.804 16 15.9313 16.9788 15.9313 18.1818C15.9313 19.3849 14.804 20.3636 13.4185 20.3636C12.0329 20.3636 10.9056 19.3849 10.9056 18.1818C10.9056 16.9788 12.0329 16 13.4185 16Z"
        fill="#fe4118"
      />
    </svg>
  );
};

export default React.memo(Icon);