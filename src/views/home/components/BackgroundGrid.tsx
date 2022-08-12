import { Box } from '@mui/material';
import { SvgIconProps } from '@mui/material/SvgIcon';
import React from 'react';
import { BoxProps } from 'components';

const Icon = (props: SvgIconProps) => {
  return (
    <svg width="214" height="270" viewBox="0 0 214 270" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g opacity="0.4">
        <path
          opacity="0.3"
          d="M-41.0192 185.103V151.815L-12.8504 135.168L15.3125 151.815V185.103L-12.8504 201.75L-41.0192 185.103Z"
          stroke="#91FE39"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          opacity="0.3"
          d="M-12.8513 135.374V102.081L15.3116 85.4336L43.4805 102.081V135.374L15.3116 152.021L-12.8513 135.374Z"
          stroke="#91FE39"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          opacity="0.3"
          d="M43.4807 102.085V68.7915L71.6436 52.1445L99.8125 68.7915V102.085L71.6436 118.732L43.4807 102.085Z"
          stroke="#91FE39"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          opacity="0.3"
          d="M43.4807 168.667V135.374L71.6436 118.727L99.8125 135.374V168.667L71.6436 185.314L43.4807 168.667Z"
          stroke="#91FE39"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          opacity="0.3"
          d="M71.6448 118.521V85.2267L99.8137 68.5859L127.977 85.2267V118.521L99.8137 135.168L71.6448 118.521Z"
          stroke="#91FE39"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          opacity="0.3"
          d="M99.8128 102.085V68.7915L127.976 52.1445L156.145 68.7915V102.085L127.976 118.732L99.8128 102.085Z"
          stroke="#91FE39"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          opacity="0.3"
          d="M71.6448 151.816V118.522L99.8137 101.875L127.977 118.522V151.816L99.8137 168.463L71.6448 151.816Z"
          stroke="#91FE39"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          opacity="0.3"
          d="M-41.0192 52.3471V19.0532L-12.8504 2.40625L15.3125 19.0532V52.3471L-12.8504 68.9941L-41.0192 52.3471Z"
          stroke="#91FE39"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          opacity="0.3"
          d="M-12.8513 68.7902V35.5024L15.3116 18.8555L43.4805 35.5024V68.7902L15.3116 85.4371L-12.8513 68.7902Z"
          stroke="#91FE39"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          opacity="0.3"
          d="M15.3128 51.9409V18.6469L43.4817 2L71.6445 18.6469V51.9409L43.4817 68.5878L15.3128 51.9409Z"
          stroke="#91FE39"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          opacity="0.3"
          d="M15.3128 118.521V85.2267L43.4817 68.5859L71.6445 85.2267V118.521L43.4817 135.168L15.3128 118.521Z"
          stroke="#91FE39"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          opacity="0.3"
          d="M99.8128 168.667V135.374L127.976 118.727L156.145 135.374V168.667L127.976 185.314L99.8128 168.667Z"
          stroke="#91FE39"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          opacity="0.3"
          d="M127.977 185.103V151.815L156.146 135.168L184.309 151.815V185.103L156.146 201.75L127.977 185.103Z"
          stroke="#91FE39"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          opacity="0.3"
          d="M-12.8513 201.954V168.667L15.3116 152.02L43.4805 168.667V201.954L15.3116 218.601L-12.8513 201.954Z"
          stroke="#91FE39"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          opacity="0.3"
          d="M43.4807 201.954V168.667L71.6436 152.02L99.8125 168.667V201.954L71.6436 218.601L43.4807 201.954Z"
          stroke="#91FE39"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          opacity="0.3"
          d="M-41.0192 251.691V218.397L-12.8504 201.75L15.3125 218.397V251.691L-12.8504 268.338L-41.0192 251.691Z"
          stroke="#91FE39"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          opacity="0.3"
          d="M156.145 201.954V168.667L184.308 152.02L212.477 168.667V201.954L184.308 218.601L156.145 201.954Z"
          stroke="#91FE39"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          opacity="0.3"
          d="M-12.8513 235.247V201.953L15.3116 185.312L43.4805 201.953V235.247L15.3116 251.894L-12.8513 235.247Z"
          stroke="#91FE39"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
      </g>
    </svg>
  );
};

type ValueType = string | number;
interface Props extends BoxProps {
  width?: ValueType;
  top?: ValueType;
  left?: ValueType;
  right?: ValueType;
  bottom?: ValueType;
}

const View: React.FC<Props> = (props) => {
  const { sx, ...otherProps } = props;
  const { width = 400, top = 'none', left = 'none', right = 'none', bottom = 'none' } = props;
  return (
    <Box sx={{ position: 'absolute', top, left, right, bottom, zIndex: 0, ...sx }} {...otherProps}>
      <Icon width={width} />
    </Box>
  );
};

export default React.memo(View);
