import { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';

const Icon = (props: SvgIconProps) => {
  return (
    <svg width="50" height="44" viewBox="0 0 50 44" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M44.145 8.32812H42.1875V6.3707C42.1875 3.14219 39.5609 0.515625 36.3325 0.515625H5.85938C2.62852 0.515625 0 3.14414 0 6.375V37.625C0 40.8559 2.62852 43.4844 5.85938 43.4844H44.145C47.3735 43.4844 50 40.8578 50 37.6294V14.1832C50 10.9547 47.3734 8.32812 44.145 8.32812ZM5.85938 4.42188H36.3325C37.407 4.42188 38.2812 5.29609 38.2812 6.3707V8.32812H5.85938C4.78242 8.32812 3.90625 7.45195 3.90625 6.375C3.90625 5.29805 4.78242 4.42188 5.85938 4.42188ZM46.0938 29.8125H38.2812C36.1273 29.8125 34.375 28.0602 34.375 25.9062C34.375 23.7523 36.1273 22 38.2812 22H46.0938V29.8125ZM46.0938 18.0938H38.2812C33.9734 18.0938 30.4688 21.5984 30.4688 25.9062C30.4688 30.2141 33.9734 33.7188 38.2812 33.7188H46.0938V37.6294C46.0938 38.7039 45.2195 39.5781 44.145 39.5781H5.85938C4.78242 39.5781 3.90625 38.702 3.90625 37.625V11.8984C4.51758 12.1152 5.17471 12.2344 5.85938 12.2344H44.145C45.2195 12.2344 46.0938 13.1086 46.0938 14.1831V18.0938Z"
        fill="#C4C4C4"
        fillOpacity="0.5"
      />
      <path
        d="M23.4733 26.448C24.1933 26.676 24.7573 27.06 25.1653 27.6C25.5733 28.128 25.7773 28.782 25.7773 29.562C25.7773 30.666 25.3453 31.518 24.4813 32.118C23.6293 32.706 22.3813 33 20.7373 33H14.2213V20.4H20.3773C21.9133 20.4 23.0893 20.694 23.9053 21.282C24.7333 21.87 25.1473 22.668 25.1473 23.676C25.1473 24.288 24.9973 24.834 24.6973 25.314C24.4093 25.794 24.0013 26.172 23.4733 26.448ZM17.1193 22.596V25.566H20.0173C20.7373 25.566 21.2833 25.44 21.6553 25.188C22.0273 24.936 22.2133 24.564 22.2133 24.072C22.2133 23.58 22.0273 23.214 21.6553 22.974C21.2833 22.722 20.7373 22.596 20.0173 22.596H17.1193ZM20.5213 30.804C21.2893 30.804 21.8653 30.678 22.2493 30.426C22.6453 30.174 22.8433 29.784 22.8433 29.256C22.8433 28.212 22.0693 27.69 20.5213 27.69H17.1193V30.804H20.5213Z"
        fill="#C4C4C4"
        fillOpacity="0.5"
      />
    </svg>
  );
};

export default React.memo(Icon);
