import { Stack, Subtitle, Text, Title, styled } from 'components';
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

const View: React.FC<DashboardProps> = ({ Icon, name, unit, value }) => {
  return (
    <Wrapper>
      <Icon width={200} />
      <Stack direction="row" spacing={0} alignItems="baseline">
        <Title variant="h3" color="primary.main" sx={{ userSelect: 'none', fontWeight: 600 }}>
          {value}
        </Title>
        <Subtitle variant="h5" color="primary.main" sx={{ userSelect: 'none' }}>
          {unit}
        </Subtitle>
      </Stack>
      <Text sx={{ userSelect: 'none' }}>{name}</Text>
    </Wrapper>
  );
};

export default React.memo(View);
