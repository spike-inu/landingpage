import { LogoIcon } from 'assets/icons';
import { Divider, Grid, Stack, Text, AppName } from 'components';
import React from 'react';
import Disclaimer from './components/Disclaimer';
import Policy from './components/Policy';
import Privacy from './components/Privacy';
import Term from './components/Term';
const View: React.FC = () => {
  return (
    <Stack bgcolor="#121212">
      <Divider />

      <Stack alignItems="center" justifyContent="center" direction="row" spacing={4} p={8}>
        <LogoIcon width={64} height={64} />
        <AppName fontSize={24} />
      </Stack>

      <Divider />

      <Stack alignItems="center" p={8}>
        <Stack maxWidth="lg" width="100%">
          <Grid container justifyContent="center" spacing={2}>
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
        </Stack>
      </Stack>

      <Stack bgcolor="#030303" p={4} justifyContent="center" alignItems="center" textAlign="center">
        <Text color="rgba(255, 255, 255, 0.47)">Copyright © 2022, All Right Reserved by iCrosschain</Text>
      </Stack>
    </Stack>
  );
};

export default React.memo(View);
