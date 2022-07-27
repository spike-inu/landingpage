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
    background-image: linear-gradient(black, ${theme.palette.background.default}), linear-gradient(#5F626C, #5f626c42,#5F626C);
     border: double 3px transparent;
    background-origin: border-box;
    background-clip: content-box, border-box;
    //  border-image-slice: 1;

    :hover {
        background-image:${theme.palette.background.default};
        border: 3px solid ${theme.palette.primary.main};
        .icon,.border-icon {
          stroke: ${theme.palette.primary.main};
          fill: ${theme.palette.primary.main};
          border-color: ${theme.palette.primary.main};
          // transform:scale(1.1);
        }
    }
    .icon {
        transition:0.2s;
        stroke: #C4C4C4;
        fill:#C4C4C4;
    }
    .border-icon {
      border: 3px solid #C4C4C4;
      border-radius:50%;
      padding:15px;   
      transition:1s
    }
    transition:0.5s
  `,
);

const Desktop: React.FC<FeatureItemProps> = ({ Icon, title, description }) => {
  return (
    <Grid item lg={4} md={6} sm={12}>
      <Wrapper>
        <Stack alignItems="center" textAlign="center" px={10} mt={15} spacing={4} height="100%">
          <Stack className="border-icon">
            <Icon className="icon" />
          </Stack>
          <Subtitle
            sx={
              {
                // minHeight: 70
              }
            }
          >
            {title}
          </Subtitle>
          <Text id="title">{description}</Text>
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
            <Stack className="border-icon">
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
