import { Box } from '@mui/system';
import { Grid, Page, Stack, Text, Title } from 'components';
import { useDetect } from 'hooks';
import React from 'react';
import data from './data';
import Item from './Item';
import ItemMobile from './ItemMobile';

const Desktop: React.FC = () => {
  return (
    <Page spacing={10} px={{ xs: 0, md: 20 }}>
      <Stack textAlign="center" spacing={2} position="relative">
        <Text sx={{ opacity: 0.47 }}>Our Report</Text>
        <Title>Report</Title>
      </Stack>
      <Box>
        <Grid container spacing={10}>
          {data.map((item, index) => {
            return <Item key={index} {...item} index={index} />;
          })}
        </Grid>
      </Box>
    </Page>
  );
};

const Mobile: React.FC = () => {
  return (
    <Stack px={4} spacing={10}>
      <Stack textAlign="center" spacing={2} position="relative">
        <Title>Report</Title>
      </Stack>
      <Box>
        <Stack spacing={5}>
          {data.map((item, index) => {
            return <ItemMobile key={index} {...item} index={index} />;
          })}
        </Stack>
      </Box>
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
