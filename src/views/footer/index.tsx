import { LogoIcon } from 'assets/icons';
import { Box, Divider, Grid, IconButton, Page, Stack, styled, Text, ButtonBase } from 'components';
import socials from 'data/social';
import React from 'react';
import Disclaimer from './components/Disclaimer';
import Policy from './components/Policy';
import Privacy from './components/Privacy';
import Term from './components/Term';
const View: React.FC = () => {
  return (
    <Stack>
      <Divider />
      <Page spacing={4} sx={{ py: 8 }}>
        <Stack alignItems="center">
          <LogoIcon width={120} height={120} />
        </Stack>

        <Box>
          <Grid container justifyContent="center" spacing={0}>
            <Grid item xs={12} md={3} textAlign="center">
              <Disclaimer />
            </Grid>
            <Grid item xs={12} md={3} textAlign="center">
              <Privacy />
            </Grid>
            <Grid item xs={12} md={3} textAlign="center">
              <Term />
            </Grid>
            <Grid item xs={12} md={3} textAlign="center">
              <Policy />
            </Grid>
          </Grid>
        </Box>
        <Box display={{ md: 'flex', xs: 'none' }}>
          <Grid container justifyContent="center" alignItems="center" spacing={2}>
            {socials.map((item, index) => {
              const { Icon, href } = item;
              const IconStyled = styled(Icon)`
                mix-blend-mode: luminosity;
                :hover {
                  mix-blend-mode: normal;
                }
              `;
              return (
                <Grid item key={index}>
                  <IconButton sx={{ p: 4 }} href={href} target="_blank">
                    <IconStyled />
                  </IconButton>
                </Grid>
              );
            })}
          </Grid>
        </Box>
        <Stack direction="row" spacing={2} justifyContent="center">
          <Text>Email:</Text>
          <Text color="primary.main">support@icrosschain.io</Text>
        </Stack>
      </Page>

      <Stack sx={{ p: 4, bgcolor: '#464B5F33' }} justifyContent="center" alignItems="center" textAlign="center">
        <Text>Copyright © 2022, All Right Reserved by iCrosschain</Text>
      </Stack>
    </Stack>
  );
};

export default React.memo(View);
