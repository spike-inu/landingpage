import { AppName, Grid, Image, LaunchApp, Stack, Text, styled } from 'components';
import { useDetect } from 'hooks';
import React from 'react';
import BackgroundGrid from '../components/BackgroundGrid';
import Logo from './components/Logo';
import Square1 from './components/Square1';
import Square2 from './components/Square2';
import Square3 from './components/Square3';
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

const Square1Styled = styled(Square1)`
  position: absolute;
  animation: square 10s infinite;
  animation-timing-function: linear;
  top: 20%;
  left: 10%;
`;

const Square2Styled = styled(Square2)`
  position: absolute;
  animation: square 5s infinite;
  animation-timing-function: linear;
  bottom: 20%;
  left: 30%;
`;

const Square3Styled = styled(Square3)`
  position: absolute;
  animation: square 3s infinite;
  animation-timing-function: linear;
  top: 20%;
  right: 25%;
  animation-direction: reverse;
`;

const Desktop: React.FC = () => {
  const { subtitle, description } = data;
  return (
    <Wrapper alignItems="center">
      <>
        <BackgroundGrid width={400} left={0} top={20} />
      </>

      <Grid maxWidth="lg" container alignItems="center" py={{ xs: 20, md: 0 }}>
        <Grid item md={4}>
          <Stack sx={{ px: 10, py: 20 }}>
            <AppNameStyled variant="h2" />
            <Stack mt={4} spacing={8} alignItems="flex-start">
              <Text fontWeight="bold" variant="h6">
                {subtitle}
              </Text>
              <Text color="primary.main">{description}</Text>
              <LaunchApp />
            </Stack>
          </Stack>
        </Grid>
        <Grid item md={8} position="relative">
          <Stack sx={{ height: { md: '75vh', xs: '50vh' }, bgcolor: 'transparent' }}>
            {/* <Logo width="100%" height="100%" /> */}
            <Image src="/images/ic-introduction.png" width="100%" height="100%" loading="lazy" />
          </Stack>
          <Square1Styled />
          <Square2Styled />
          <Square3Styled />
        </Grid>
      </Grid>

      <Dashboard />
    </Wrapper>
  );
};

const Mobile: React.FC = () => {
  const { subtitle, description } = data;
  return (
    <Stack alignItems="center">
      <>
        <BackgroundGrid width={120} right={0} top={240} />
      </>
      <Stack>
        <Stack sx={{ position: 'relative' }} height="70vh" position="relative">
          <Stack sx={{ position: 'absolute', right: 0, left: 0, top: 0, bottom: 0, transform: 'scale(1.2)' }}>
            {/* <Logo width="100%" height="100%" /> */}
            <Image src="/images/ic-introduction.png" width="100%" height="100%" />
          </Stack>
          <Square1Styled />
          <Square2Styled />
          <Square3Styled style={{ right: '10%' }} />
        </Stack>
        <Stack sx={{ mt: '-10vh', px: 5 }}>
          <AppNameStyled variant="h2" />
          <Stack mt={4} spacing={5} alignItems="flex-start">
            <Text fontWeight="bold" variant="h6">
              {subtitle}
            </Text>
            <Text>{description}</Text>
          </Stack>
          <Stack mt={8}>
            <LaunchApp />
          </Stack>
        </Stack>
        <Stack mt={8}>
          <Dashboard />
        </Stack>
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
