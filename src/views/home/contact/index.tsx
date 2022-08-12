import { Box, Grid, Page, Stack, Text, Title } from 'components';
import socials from 'data/social';
import React from 'react';
import Item from './Item';

const View: React.FC = () => {
  return (
    <Page spacing={10} px={{ xs: 0, md: 20 }} direction={{ xs: 'column', md: 'row' }}>
      <Stack textAlign={{ xs: 'center', md: 'left' }} spacing={2} position="relative" width={{ xs: '100%', md: '25%' }}>
        <Text sx={{ opacity: 0.47 }}>Our Contact</Text>
        <Title>Get in touch with us</Title>
      </Stack>

      <Box flex="1">
        <Grid container spacing={4} justifyContent="center">
          {socials.map((item, index) => (
            <Item key={index} index={index} {...item} />
          ))}
        </Grid>
      </Box>
    </Page>
  );
};

export default React.memo(View);
