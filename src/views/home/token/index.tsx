import Tab from '@mui/material/Tab';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import { Box, Page, Stack, Text, Title } from 'components';
import chains from 'data/chains';
import { useDetect } from 'hooks';
import React, { useCallback, useState } from 'react';
import Background from '../components/Background';

const View: React.FC = () => {
  const { isMobile } = useDetect();
  const [tab, setTab] = useState(0);

  const handleChange = useCallback((event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  }, []);
  return (
    <Page spacing={{ xs: 11, md: 23 }} px={{ xs: 0, md: 20 }}>
      <Stack textAlign="center" spacing={2} position="relative" alignItems="center">
        <Text sx={{ opacity: 0.47 }}>Our Support</Text>
        <Title>Our Token</Title>
      </Stack>

      <Box>
        <Tabs
          value={tab}
          onChange={handleChange}
          sx={{
            mx: isMobile ? undefined : -10,
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

        <Stack direction="row" justifyContent="center" mt={{ xs: 12, md: 20 }} spacing={4}>
          <Text fontSize={20} letterSpacing="0.5em">
            COMING
          </Text>
          <Text fontSize={20} letterSpacing="0.5em" color="primary.main">
            SOON
          </Text>
        </Stack>
        <Stack height={400} mt={{ xs: 6, md: 12 }}>
          <Background />
        </Stack>
      </Box>
    </Page>
  );
};

export default React.memo(View);
