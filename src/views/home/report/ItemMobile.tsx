import { Box, Pressable, Stack, styled, Subtitle, Text } from 'components';
import React from 'react';
import { ReportItemProps } from './types';

const Wrapper = styled(Box)(
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
    <Wrapper>
      <Stack p={6} spacing={6} alignItems="flex-start" textAlign="left">
        <Stack direction="row" spacing={4} alignItems="center">
          <Icon className="icon" />
          <Subtitle className={`title-${index}`}>{title}</Subtitle>
        </Stack>

        <Text id="title">{description}</Text>
        <Pressable fullWidth>Go to report</Pressable>
      </Stack>
    </Wrapper>
  );
};

export default React.memo(View);
