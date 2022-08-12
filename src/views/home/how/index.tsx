import { AppName, Box, Grid, Image, Page, Stack, Text, Title } from 'components';
import { useDetect } from 'hooks';
import React from 'react';
import data from './data';
import Item from './Item';

const Desktop: React.FC = () => {
  return (
    <Page spacing={10} px={{ xs: 0, md: 20 }}>
      <Stack spacing={2} position="relative">
        <Text sx={{ opacity: 0.47 }}>How to use</Text>
        <Title sx={{ display: 'flex' }}>
          How to use <AppName variant="h4" fontWeight={600} />
        </Title>
      </Stack>

      <Box>
        <Grid container spacing={20}>
          <Grid item md={5} xs={12} mt={20}>
            <Box position="relative">
              <Box position="absolute" top={0} left={25} bottom={0} my={5} border="1px dashed #2C3F1B" />
              <Stack position="relative" spacing={5}>
                {data.map((item, index) => (
                  <Item key={index} {...item} index={index} />
                ))}
              </Stack>
            </Box>
          </Grid>
          <Grid item md={6} xs={12} mt={10} alignItems="center">
            <Image src="/images/how-to-use.png" width={400} />
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
};

const Mobile: React.FC = () => {
  return (
    <Page spacing={10} px={{ xs: 0, md: 20 }}>
      <Stack alignItems="center" spacing={2} position="relative">
        <Text sx={{ opacity: 0.47 }}>How to use</Text>
        <Title sx={{ display: 'flex' }}>
          How to use <AppName variant="h4" fontWeight={600} />
        </Title>
      </Stack>

      <Stack spacing={20} alignItems="center">
        <Box position="relative">
          <Stack position="relative" spacing={15}>
            {data.map((item, index) => (
              <Item key={index} {...item} index={index} direction="column" isLast={index === data.length - 1} />
            ))}
          </Stack>
        </Box>
        <Stack mt={10} alignItems="center">
          <Image src="/images/how-to-use.png" width="70%" minWidth={200} sx={{ zIndex: 1 }} />
        </Stack>
      </Stack>
    </Page>
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
