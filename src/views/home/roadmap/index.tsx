import { Box, Page, Stack, Text, Title } from 'components';
import { useDetect } from 'hooks';
import React from 'react';
import Background from './components/Background';
import Phase from './components/Phase';
import data from './data.json';

const Desktop: React.FC = () => {
  return (
    <Box position="relative">
      <Page px={{ xs: 0, md: 20 }}>
        <Stack
          spacing={23}
          px={4}
          py={10}
          borderRadius={5}
          sx={{ background: 'linear-gradient(180deg, #121212 0%, #121212 50.13%, rgba(18, 18, 18, 0) 81.59%)' }}
          position="relative"
        >
          <Stack textAlign="center" spacing={2}>
            <Text sx={{ opacity: 0.47 }}>Our Roadmap</Text>
            <Title>Roadmap</Title>
          </Stack>

          <Stack direction="row">
            <Box width="50%">
              {data.slice(0, 3).map((item) => (
                <Phase item={item} key={item.title} />
              ))}
            </Box>
            <Box width="50%">
              {data.slice(3).map((item) => (
                <Phase item={item} key={item.title} fadeOut />
              ))}
            </Box>
          </Stack>
        </Stack>
      </Page>

      <Stack position="absolute" right={0} bottom={0} zIndex={0} sx={{ transform: 'translate(0,30%)' }}>
        <Background />
      </Stack>
    </Box>
  );
};

const Mobile: React.FC = () => {
  return (
    <Box position="relative">
      <Page px={{ xs: 0, md: 20 }}>
        <Stack
          spacing={11}
          px={4}
          py={10}
          borderRadius={5}
          sx={{ background: 'linear-gradient(180deg, #121212 0%, #121212 50.13%, rgba(18, 18, 18, 0) 81.59%)' }}
        >
          <Stack textAlign="center" spacing={2} position="relative">
            <Text sx={{ opacity: 0.47 }}>Our Roadmap</Text>
            <Title>Roadmap</Title>
          </Stack>
          <Stack>
            {data.map((item) => (
              <Phase item={item} key={item.title} nodeProps={{ width: 80, height: 80 }} fadeOut />
            ))}
          </Stack>
        </Stack>
      </Page>

      <Stack
        position="absolute"
        right={0}
        bottom={0}
        zIndex={0}
        alignItems="flex-end"
        sx={{ transform: 'translate(0,50%)' }}
      >
        <Background width="50%" />
      </Stack>
    </Box>
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
