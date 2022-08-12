import { Stack, Text, Title, styled } from 'components';
import React from 'react';
import { DashboardProps } from '../types';

const Wrapper = styled(Stack)`
  align-items: center;
  text-align: center;
  transform: scale(1);
  :hover {
    transform: scale(1.1);
  }
  transition: 0.5s;
`;

const View: React.FC<DashboardProps> = ({ name, unit, value }) => {
  return (
    <Wrapper>
      {/* <Icon width={200} /> */}
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
