import { IconProps } from './types';
import React from 'react';

const Icon = (props: IconProps) => {
  return (
    <svg width="29" height="25" viewBox="0 0 35 31" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        d="M0.512226 11.9874L7.19442 14.4568L9.78083 22.6925C9.94633 23.22 10.5978 23.415 11.0302 23.0649L14.7549 20.0584C15.1454 19.7434 15.7015 19.7277 16.1095 20.021L22.8277 24.8503C23.2902 25.1832 23.9455 24.9323 24.0615 24.3789L28.9829 0.939841C29.1096 0.335324 28.5096 -0.168983 27.9283 0.0536431L0.504396 10.5285C-0.172368 10.7869 -0.166471 11.7356 0.512226 11.9874ZM9.36401 13.1423L22.4235 5.17836C22.6582 5.03565 22.8997 5.34987 22.6981 5.53498L11.9203 15.4546C11.5414 15.8037 11.2971 16.271 11.2278 16.7782L10.8607 19.4721C10.8121 19.8318 10.3018 19.8675 10.2015 19.5194L8.78951 14.607C8.62779 14.0467 8.86346 13.4482 9.36401 13.1423Z"
        fill="#41b4e6"
      />
    </svg>
  );
};

export default React.memo(Icon);