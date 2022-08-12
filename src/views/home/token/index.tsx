import Tab from '@mui/material/Tab';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import { Box, Page, Stack, Text, Title } from 'components';
import chains from 'data/chains';
import React, { useCallback, useState } from 'react';
import Background from '../components/Background';

const View: React.FC = () => {
  const [tab, setTab] = useState(0);

  const handleChange = useCallback((event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  }, []);
  return (
    <Page spacing={10} px={{ xs: 0, md: 20 }}>
      <Stack textAlign="center" spacing={2} position="relative" alignItems="center">
        <Title>Our Token</Title>
      </Stack>

      <Box>
        <Tabs
          value={tab}
          onChange={handleChange}
          sx={{
            mx: -10,
            borderBottom: '1px solid #464B5F',
            [`& .${tabsClasses.scrollButtons}`]: {
              '&.Mui-disabled': { opacity: 0.3 },
              opacity: 1,
              color: 'white',
            },
          }}
          variant={'scrollable'}
          // centered={isDesktop ? true : false}
          allowScrollButtonsMobile
        >
          {chains.map((item, index) => {
            const active = tab === index;
            const { Icon, name } = item;
            return (
              <Tab
                key={index}
                icon={<Icon style={{ mixBlendMode: active ? 'normal' : 'luminosity', opacity: active ? 1 : 0.3 }} />}
                aria-label={name}
                value={index}
              />
            );
          })}
        </Tabs>
      </Box>
      <Stack direction="row" justifyContent="center" p={5} spacing={4}>
        <Text fontSize={20} letterSpacing="0.5em">
          COMING
        </Text>
        <Text fontSize={20} letterSpacing="0.5em" color="primary.main">
          SOON
        </Text>
      </Stack>
      <Stack height={400}>
        <Background />
      </Stack>

      {/* <Box>
          <Grid container spacing={20} alignItems="center">
            <Grid item md={6} xs={12}>
              <Logo width="100%" />
            </Grid>
            <Grid item md={5} xs={12}>
              <Stack spacing={10}>
                <Stack spacing={5}>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Text>Address on {chains[tab].name}:</Text>
                    <Text variant="h6">0xagd...87s3h5</Text>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Text>Price:</Text>
                    <Text variant="h6">$1.02</Text>
                  </Stack>

                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Text>Fully Diluted MC:</Text>
                    <Text variant="h6">$1,000,000</Text>
                  </Stack>
                  <Stack direction="row" justifyContent="space-between" alignItems="center">
                    <Text>Total supply:</Text>
                    <Text variant="h6">$ 1,000,000,000 ABR</Text>
                  </Stack>
                </Stack>

                <Box>
                  <Grid container spacing={2}>
                    <Grid item>
                      <BuyABR />
                    </Grid>
                    <Grid item>
                      <StakeABR />
                    </Grid>
                    <Grid item>
                      <Tokenomic />
                    </Grid>
                  </Grid>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box> */}
    </Page>
  );
};

export default React.memo(View);
