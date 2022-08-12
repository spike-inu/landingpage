import { AppName, Box, Grid, Image, Page, Stack, Text, Title } from 'components';
import { useDetect } from 'hooks';
import React from 'react';
import BackgroundGrid from '../components/BackgroundGrid';
import Line from './components/Line';
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
                {data.map((item, index) => {
                  return <Item key={index} {...item} index={index} />;
                })}
              </Stack>
            </Box>
          </Grid>
          <Grid item md={6} xs={12} mt={10} position="relative">
            <BackgroundGrid width="100%" position="absolute" sx={{ transform: 'translate(-5%,-40%)' }} />
            <BackgroundGrid width="100%" position="absolute" sx={{ transform: 'translate(40%,-5%)' }} />
            <Image src="/images/ic-how-to-use.png" width="100%" sx={{ zIndex: 1 }} />
          </Grid>
        </Grid>
      </Box>
    </Page>
  );
};

const Mobile: React.FC = () => {
  return (
    <Stack mt={20}>
      <Stack alignItems="center">
        <Image src="/images/ic-how-mobile.svg" width="80%" sx={{ zIndex: 1 }} />
      </Stack>

      <Stack px={5} mt={-10}>
        <Stack spacing={2} position="relative">
          <Title>
            How to use{'\n'}
            <AppName variant="h3" />
          </Title>
        </Stack>

        <Box mt={10}>
          <Stack position="relative">
            <Stack position="absolute" sx={{ left: 15, top: 0, bottom: 0, zIndex: 0 }}>
              <Line />
            </Stack>
            {data.map((item, index) => {
              const { title, Icon } = item;
              return (
                <Stack key={index} mb={index === data.length - 1 ? 0 : 10} zIndex={1}>
                  <Stack direction="row" alignItems="center" spacing={4}>
                    <Stack
                      sx={{
                        borderRadius: '50%',
                        bgcolor: 'primary.main',
                        width: 32,
                        height: 32,
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                    >
                      <Text color="black" fontWeight="bold" variant="h6">
                        {index + 1}
                      </Text>
                    </Stack>
                    <Icon width={40} height={40} />
                    <Text flex={1} variant="h6" sx={{ fontWeight: 'bold' }}>
                      {title}
                    </Text>
                  </Stack>
                </Stack>
              );
            })}
          </Stack>
        </Box>
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
