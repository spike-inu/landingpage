import { Box, Grid, Pressable, Stack, styled, Subtitle, Text } from 'components';
import React from 'react';
import { ReportItemProps } from './types';

const Wrapper = styled(Box)(
  ({ theme }) => `
    user-select: none;
     border-radius:10px;
     background-image: linear-gradient(black, ${theme.palette.background.default}), linear-gradient(#5F626C, #5f626c42,#5F626C);
     border: double 4px transparent;
    background-origin: border-box;
    background-clip: content-box, border-box;
    //  border-image-slice: 1;

    :hover {
        background-image:${theme.palette.background.default};
        border: 4px solid ${theme.palette.primary.main};
        .icon{
          mix-blend-mode: normal;

          transform:scale(1.3);
        }
    }
    .icon {
        transition:0.2s;
        mix-blend-mode: luminosity;

      
    }
    .title-0 {
      // ::first-letter{
      //   color:${theme.palette.primary.main};
      //   text-shadow: 0px 0px 8px ${theme.palette.primary.main};
      // }
    }
    
    transition:0.5s
  `,
);

const View: React.FC<ReportItemProps> = ({ Icon, title, description, index }) => {
  return (
    <Wrapper>
      <Stack p={8} spacing={8} alignItems="flex-start" textAlign="left">
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
