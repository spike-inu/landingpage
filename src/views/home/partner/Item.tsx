import { ButtonBase, Stack, StackProps, styled, Text } from 'components';
import { ChainProps } from 'data/types';
import React from 'react';

const Wrapper = styled((props: StackProps) => {
  return (
    <Stack
      direction={{ md: 'row', xs: 'column' }}
      spacing={2}
      px={4}
      py={2}
      alignItems="center"
      bgcolor="background.paper"
      borderRadius={2}
      minWidth={{ md: 150, xs: 120 }}
      minHeight={{ md: 52, xs: 80 }}
      {...props}
    />
  );
})`
  // mix-blend-mode: luminosity;
  mix-blend-mode: normal;
  opacity: 0.7;
  :hover {
    mix-blend-mode: normal;
    opacity: 1;
  }
  transition: 0.5s;
`;

const View: React.FC<ChainProps> = (props) => {
  const { Icon, name } = props;
  return (
    <ButtonBase>
      <Wrapper>
        <Icon />
        <Text whiteSpace="nowrap">{name}</Text>
      </Wrapper>
    </ButtonBase>
  );
};

export default React.memo(View);
