import { ButtonBase, Grid, Stack, StackProps, styled, Text } from 'components';
import { SocialProps } from 'data/types';
import React, { useCallback } from 'react';

const Wrapper = styled((props: StackProps) => {
  return (
    <Stack
      direction="row"
      spacing={4}
      px={4}
      alignItems="center"
      bgcolor="background.paper"
      borderRadius={2}
      minWidth={{ md: 200, xs: 'none' }}
      width={{ md: 'none', xs: '100%' }}
      height={50}
      {...props}
    />
  );
})`
  mix-blend-mode: luminosity;
  opacity: 0.7;
  :hover {
    mix-blend-mode: normal;
    opacity: 1;
  }
  transition: 0.5s;
`;

const View: React.FC<SocialProps> = (props) => {
  const { index, Icon, name, href } = props;
  return (
    <Grid item key={index} xs={6} md={4}>
      <ButtonBase sx={{ width: '100%' }} href={href} target="_blank">
        <Wrapper>
          <Stack minWidth={{ md: 50, xs: 'none' }} alignItems="center">
            <Icon />
          </Stack>

          <Text>{name}</Text>
        </Wrapper>
      </ButtonBase>
    </Grid>
  );
};

export default React.memo(View);
