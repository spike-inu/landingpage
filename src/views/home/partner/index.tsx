import { Box, Grid, Page, Stack, Text, Title } from 'components';
import partners from 'data/partners';
import useDetect from 'hooks/useDetect';
import React from 'react';
import Item from './Item';
import ItemMobile from './ItemMobile';

const Desktop: React.FC = () => {
  return (
    <Page spacing={10} px={{ xs: 0, md: 20 }}>
      <Stack textAlign="center" spacing={2} position="relative">
        <Text sx={{ opacity: 0.47 }}>Our Friends</Text>
        <Title>On a mission to integrate every chain</Title>
      </Stack>

      <Box>
        <Grid container spacing={4} justifyContent="center">
          {partners.map((item, index) => {
            return (
              <Grid item key={index} xs={6} md="auto">
                <Item key={index} index={index} {...item} />;
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Page>
  );
};

const Mobile: React.FC = () => {
  return (
    <Stack>
      <Page spacing={10}>
        <Stack textAlign="center" spacing={2} position="relative">
          <Title>Partners</Title>
        </Stack>

        <Box>
          <Grid container spacing={4} justifyContent="center">
            {partners.map((item, index) => {
              return (
                <Grid item key={index} xs={4}>
                  <ItemMobile key={index} index={index} {...item} />;
                </Grid>
              );
            })}
          </Grid>
          {/* <Stack direction="row" spacing={4} overflow="auto">
            {partners.map((item, index) => {
              return <Item key={index} index={index} {...item} />;
            })}
          </Stack> */}
        </Box>
      </Page>
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
