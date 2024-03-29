import React from 'react';
import { IconProps } from './types';

const Icon = (props: IconProps) => {
  return (
    <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M18.1515 6C25.4149 6 31.303 11.8559 31.303 19.0794C31.303 25.6078 26.4937 31.0188 20.2064 32V22.8602H23.2708L23.8539 19.0794H23.7905L23.7967 19.0391H20.2064V16.626C20.2064 15.5916 20.7159 14.5834 22.3497 14.5834H24.008V11.3646C24.008 11.3646 23.9883 11.3613 23.9511 11.3553V11.295C23.9511 11.295 22.4431 11.0386 21.0014 11.0386C17.9914 11.0386 16.0242 12.8561 16.0242 16.1466V19.0391H12.6784V22.8342H12.7573V22.8602H16.0242V31.9885C9.77243 30.9772 5 25.5827 5 19.0794C5 11.8559 10.8881 6 18.1515 6Z"
        fill="#2474e1"
      />
    </svg>
  );
};

export default React.memo(Icon);
