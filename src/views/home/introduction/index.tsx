import { AppName, Grid, LaunchApp, Stack, Text, styled, Box, Page } from 'components';
import { useDetect } from 'hooks';
import React, { Fragment } from 'react';
import BackgroundGrid from '../components/BackgroundGrid';
import Background from '../components/Background';
import Dashboard from './Dashboard';
import data from './data';

const Wrapper = styled(Stack)`
  @keyframes square {
    0 {
      transform: rotateZ(0deg) scale(1);
    }
    25% {
      transform: rotateZ(90deg) scale(1.2);
    }
    50% {
      transform: rotateZ(180deg) scale(1.3);
    }
    75% {
      transform: rotateZ(270deg) scale(1.2);
    }
    100% {
      transform: rotateZ(360deg) scale(1);
    }
  }
`;

const AppNameStyled = styled(AppName)(
  ({ theme }) => `
  ::first-letter{
    color:${theme.palette.primary.main};
    text-shadow: 0px 0px 8px ${theme.palette.primary.main};
  }
`,
);

const Desktop: React.FC = () => {
  const { subtitle, description } = data;
  return (
    <Wrapper>
      <Page alignItems="center" px={{ xs: 0, md: 20 }}>
        <Grid position="relative" maxWidth="lg" container alignItems="center" py={{ xs: 20, md: 0 }} spacing={22}>
          <BackgroundGrid width={400} left="-20%" top="80%" />
          <Grid item md={6}>
            <Stack py={20}>
              <AppNameStyled fontSize={18} fontWeight={600} />
              <Stack mt={4} spacing={8} alignItems="flex-start">
                <Stack direction="row" alignItems="center" spacing={4}>
                  {subtitle.split(' - ').map((text, index) => (
                    <Fragment key={index}>
                      {!!index && (
                        <Box
                          mx={{ xs: 3, md: 4 }}
                          width={{ xs: 12, md: 14 }}
                          height={{ xs: 12, md: 14 }}
                          bgcolor="primary.main"
                          borderRadius="50%"
                        />
                      )}
                      <Text fontSize={{ xs: 32, md: 40 }} fontWeight="bold" letterSpacing="-0.01em">
                        {text}
                      </Text>
                    </Fragment>
                  ))}
                </Stack>
                <Text sx={{ opacity: 0.7 }}>{description}</Text>
                <LaunchApp variant="contained" size="large" />
              </Stack>
            </Stack>
          </Grid>
          <Grid item md={6} position="relative" height={{ md: '85vh', xs: '60vh' }}>
            <Background position="absolute" top={0} left="50%" />
          </Grid>
        </Grid>
        <Dashboard />
      </Page>
    </Wrapper>
  );
};

const Mobile: React.FC = () => {
  const { subtitle, description } = data;
  return (
    <Stack mt={22}>
      <BackgroundGrid width={120} right={0} top={240} sx={{ transform: 'rotate(180deg)' }} />
      <Stack px={5}>
        <AppNameStyled fontSize={18} fontWeight={600} />
        <Stack mt={4} spacing={8} alignItems="flex-start">
          <Stack direction="row" alignItems="center" flexWrap="wrap">
            {subtitle.split(' - ').map((text, index) => (
              <Fragment key={index}>
                {!!index && (
                  <Box
                    mx={{ xs: 3, md: 4 }}
                    width={{ xs: 12, md: 14 }}
                    height={{ xs: 12, md: 14 }}
                    bgcolor="primary.main"
                    borderRadius="50%"
                  />
                )}
                <Text fontSize={{ xs: 32, md: 40 }} fontWeight="bold" letterSpacing="-0.01em">
                  {text}
                </Text>
              </Fragment>
            ))}
          </Stack>
          <Text sx={{ opacity: 0.7 }}>{description}</Text>
          <LaunchApp variant="contained" size="large" fullWidth />
        </Stack>
      </Stack>
      <Stack mt={8}>
        <Dashboard />
      </Stack>
    </Stack>
  );
};

const View: React.FC = () => {
  const { isMobile } = useDetect();
  if (isMobile) {
    return <Mobile />;
  }
  return <Desktop />;
};

export default React.memo(View);
