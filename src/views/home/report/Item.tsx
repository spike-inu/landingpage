import { Grid, Pressable, Stack, styled, Subtitle, Text } from 'components';
import React from 'react';
import { ReportItemProps } from './types';

const Wrapper = styled(Stack)(
  ({ theme }) => `
    user-select: none;
    border-radius:10px;
    background-image: linear-gradient(black, ${theme.palette.background.default}), linear-gradient(rgb(220 255 192 / 30%), #D4FFB1, #394132);
    border: double 1px transparent;
    background-origin: border-box;
    background-clip: content-box, border-box;
  `,
);

const View: React.FC<ReportItemProps> = ({ Icon, title, description, index }) => {
  return (
    <Grid item lg={4} md={6} sm={12}>
      <Wrapper height="100%">
        <Stack p={8} spacing={8} height="100%" justifyContent="space-between">
          <Stack spacing={8} alignItems="flex-start" textAlign="left">
            <Icon className="icon" />
            <Subtitle className={`title-${index}`}>{title}</Subtitle>
            <Text id="title">{description}</Text>
          </Stack>
          <Pressable fullWidth>Go to report</Pressable>
        </Stack>
      </Wrapper>
    </Grid>
  );
};

export default React.memo(View);
