import { Stack, Text, styled } from 'components';
import React from 'react';
import { DashboardProps } from '../types';

const Wrapper = styled(Stack)`
  transform: scale(1);
  :hover {
    transform: scale(1.1);
  }
  transition: 0.5s;
`;

const View: React.FC<DashboardProps> = ({ name, unit, value }) => {
  return (
    <Wrapper textAlign={{ xs: 'left', md: 'center' }}>
      <Text fontSize={28} fontWeight={600} sx={{ userSelect: 'none' }}>
        {value} {unit}
      </Text>
      <Text mt={2} sx={{ userSelect: 'none' }}>
        {name}
      </Text>
    </Wrapper>
  );
};

export default React.memo(View);
