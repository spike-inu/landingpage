import { Box, Page, Stack, Text, Title } from 'components';
import { useDetect } from 'hooks';
import React from 'react';
import Phase from './components/Phase';
import data from './data.json';

const Desktop: React.FC = () => {
  return (
    <Page spacing={10} px={{ xs: 0, md: 20 }}>
      <Stack textAlign="center" spacing={2} position="relative">
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
            <Phase item={item} key={item.title} />
          ))}
        </Box>
      </Stack>
    </Page>
  );
};

const Mobile: React.FC = () => {
  return (
    <Stack px={5}>
      <Stack textAlign="center" spacing={2} position="relative">
        <Title>Roadmap</Title>
      </Stack>
      <Stack>
        {data.map((item) => (
          <Phase item={item} key={item.title} />
        ))}
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
