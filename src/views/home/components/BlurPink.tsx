import { Box, Stack, styled, BoxProps } from 'components';
import React from 'react';

const Blur1 = styled(Stack)`
  position: absolute;
  background: radial-gradient(50% 50% at 50% 50%, #ffd9d9 0%, #f22c2c 42.19%, rgba(166, 34, 34, 0) 100%);
  mix-blend-mode: normal;
  filter: blur(100%);
  width: 100%;
  height: 100%;
`;

const Blur2 = styled(Stack)`
  position: absolute;
  background: rgba(82, 31, 237, 0.5);
  filter: blur(216px);
  transform: rotate(15deg);
  width: 100%;
  height: 100%;
  top: 50%;
`;

type ValueType = string | number;
interface Props extends BoxProps {
  size?: ValueType;
  top?: ValueType;
  left?: ValueType;
  right?: ValueType;
  bottom?: ValueType;
}

const View: React.FC<Props> = (props) => {
  const { sx, ...otherProps } = props;
  const { size = 700, top = 'none', left = 'none', right = 'none', bottom = 'none' } = props;
  return (
    <Box
      sx={{ position: 'absolute', top, left, right, bottom, zIndex: 0, width: size, height: size, opacity: 0.3, ...sx }}
      {...otherProps}
    >
      <Stack position="relative" width="100%" height="100%">
        <Blur1 />
        <Blur2 />
      </Stack>
    </Box>
  );
};

export default React.memo(View);
