import { Box, Grid, Page, Stack, Text, Title } from 'components';
import partners from 'data/partners';
import useDetect from 'hooks/useDetect';
import React from 'react';
import Item from './Item';
import ItemMobile from './ItemMobile';

const Desktop: React.FC = () => {
  return (
    <Page spacing={14} px={{ xs: 0, md: 20 }}>
      <Stack textAlign="center" spacing={2} position="relative">
        <Text sx={{ opacity: 0.47 }}>Our Friends</Text>
        <Title>On a mission to</Title>
        <Title>integrate every chain</Title>
      </Stack>

      <Box>
        <Grid container spacing={4} columns={{ xs: 12, md: 5 }}>
          {partners.map((item, index) => (
            <Grid item key={index} xs={4} md={1}>
              <Item key={index} index={index} {...item} />;
            </Grid>
          ))}
        </Grid>
      </Box>
    </Page>
  );
};

const Mobile: React.FC = () => {
  return (
    <Page spacing={11} px={{ xs: 0, md: 20 }}>
      <Stack textAlign="center" spacing={2} position="relative">
        <Text sx={{ opacity: 0.47 }}>Our Friends</Text>
        <Title>On a mission to</Title>
        <Title>integrate every chain</Title>
      </Stack>

      <Box>
        <Grid container spacing={2} columns={{ xs: 12, md: 5 }}>
          {partners.map((item, index) => (
            <Grid item key={index} xs={4} md={1}>
              <ItemMobile key={index} index={index} {...item} />;
            </Grid>
          ))}
        </Grid>
      </Box>
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
