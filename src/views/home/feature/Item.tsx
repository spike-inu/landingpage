import { Grid, Stack, styled, Subtitle, Text, ButtonBase } from 'components';
import { useDetect } from 'hooks';
import React from 'react';
import { FeatureItemProps } from './types';

const Wrapper = styled(ButtonBase)(
  ({ theme }) => `
    user-select: none;
     border-radius:10px;
     height:100%;
     width:100%;
    background-image: linear-gradient(black, ${theme.palette.background.default}), linear-gradient(rgb(220 255 192 / 30%), #D4FFB1, #394132);
    border: double 1px transparent;
    background-origin: border-box;
    background-clip: content-box, border-box;
    //  border-image-slice: 1;

    :hover {
        background-image:${theme.palette.background.default};
        border: 1px solid ${theme.palette.primary.main};
        .icon {
          stroke: ${theme.palette.primary.main};
          fill: ${theme.palette.primary.main};
          border-color: ${theme.palette.primary.main};
          // transform:scale(1.1);
        }
    }
    .icon {
        transition:0.2s;
        stroke: ${theme.palette.primary.main};
        fill: ${theme.palette.primary.main};
    }
    transition:0.5s
  `,
);

const Desktop: React.FC<FeatureItemProps> = ({ Icon, title, description, index }) => {
  return (
    <Grid item md={6} sm={12} sx={{ transform: index % 2 === 1 ? 'translateY(30px)' : 'translateY(-30px)' }}>
      <Wrapper>
        <Stack alignItems="flex-start" textAlign="left" px={10} mt={15} spacing={4} height="100%">
          <Stack width="100%" alignItems="flex-end">
            <Icon className="icon" color="primary" />
          </Stack>
          <Text fontSize={22} lineHeight={1.25}>
            {title}
          </Text>
          <Text sx={{ opacity: 0.7 }} id="title">
            {description}
          </Text>
        </Stack>
      </Wrapper>
    </Grid>
  );
};

const Mobile: React.FC<FeatureItemProps> = ({ Icon, title, description }) => {
  return (
    <Grid item xs={12} sm={12}>
      <Wrapper>
        <Stack textAlign="center" p={5} spacing={5}>
          <Stack direction="row" alignItems="center" textAlign="left" spacing={4}>
            <Stack>
              <Icon className="icon" width={28} height={28} />
            </Stack>
            <Stack flex={1}>
              <Subtitle sx={{ fontWeight: 'bold' }}>{title}</Subtitle>
            </Stack>
          </Stack>

          <Text id="title" textAlign="left">
            {description}
          </Text>
        </Stack>
      </Wrapper>
    </Grid>
  );
};

const View: React.FC<FeatureItemProps> = (props) => {
  const { isMobile } = useDetect();
  if (isMobile) {
    return <Mobile {...props} />;
  }
  return <Desktop {...props} />;
};

export default React.memo(View);
