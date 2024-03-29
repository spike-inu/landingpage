import { Box } from '@mui/system';
import { Grid, Page, Stack, Text, Title } from 'components';
import React from 'react';
import data from './data';
import Item from './Item';

const View: React.FC = () => {
  return (
    <Page mt={10} spacing={{ xs: 2, md: 15 }} alignItems="center" px={{ xs: 0, md: 20 }}>
      <Stack textAlign="center" spacing={2} position="relative">
        <Text sx={{ opacity: 0.47 }}>Our Feature</Text>
        <Title>What Services We Offer</Title>
      </Stack>
      <Box pt={8}>
        <Grid container spacing={{ xs: 6, md: 10 }} py={{ md: 12 }}>
          {data.map((item, index) => (
            <Item key={index} index={index} {...item} />
          ))}
        </Grid>
      </Box>
    </Page>
  );
};

export default React.memo(View);
