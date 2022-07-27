import Tab from '@mui/material/Tab';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import { Box, Grid, Page, Stack, Subtitle, Title } from 'components';
import chains from 'data/chains';
import { useDetect } from 'hooks';
import React, { useCallback, useState } from 'react';
import Item from './Item';

const Desktop: React.FC = () => {
  const { isDesktop } = useDetect();
  const [tab, setTab] = useState(0);

  const handleChange = useCallback((event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  }, []);
  return (
    <Stack>
      <Page spacing={10}>
        <Stack textAlign="center" spacing={2} position="relative">
          <Subtitle color="primary.main" fontWeight={600}>
            Our Support
          </Subtitle>
          <Title>Blockchains and Liquidity Source </Title>
        </Stack>
        <Box>
          <Tabs
            value={tab}
            onChange={handleChange}
            sx={{
              borderBottom: '1px solid #464B5F',
              [`& .${tabsClasses.scrollButtons}`]: {
                '&.Mui-disabled': { opacity: 0.3 },
                opacity: 1,
                color: 'white',
              },
            }}
            variant={'scrollable'}
            // centered={isDesktop ? true : false}
            // allowScrollButtonsMobile
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

        <Box p={5} bgcolor="rgba(70, 75, 95, 0.2)" borderRadius={2} minHeight={80}>
          <Grid container spacing={5}>
            {chains[tab].swaps &&
              chains[tab].swaps.map((item, index) => {
                return (
                  <Grid item key={index}>
                    <Item {...item} index={index} />
                  </Grid>
                );
              })}
          </Grid>
        </Box>
      </Page>
    </Stack>
  );
};

export default React.memo(Desktop);
