import Tab from '@mui/material/Tab';
import Tabs, { tabsClasses } from '@mui/material/Tabs';
import { Box, Stack, Subtitle, Title, useTheme } from 'components';
import chains from 'data/chains';
import { useDetect } from 'hooks';
import React, { useCallback, useState } from 'react';
import Item from './Item';

const Mobile: React.FC = () => {
  const { isDesktop } = useDetect();
  const [tab, setTab] = useState(0);
  const { palette } = useTheme();

  const handleChange = useCallback((event: React.SyntheticEvent, newValue: number) => {
    setTab(newValue);
  }, []);

  return (
    <Stack spacing={10}>
      <Stack textAlign="center" spacing={2} position="relative">
        <Subtitle color="primary.main" fontWeight={600}>
          Our Support
        </Subtitle>
        <Title>Blockchains and Liquidity Source </Title>
      </Stack>
      <Stack>
        <Box px={4} position="relative">
          <Tabs
            value={tab}
            onChange={handleChange}
            TabIndicatorProps={{
              style: {
                display: 'none',
              },
            }}
            sx={{
              [`& .${tabsClasses.scrollButtons}`]: {
                '& .Mui-disabled': { opacity: 0.3 },
                opacity: 1,
                color: 'white',
              },
              '& .Mui-selected': {
                bgcolor: `#10172a`,
                border: `1px solid ${palette.primary.main}`,
                boxShadow: `0px 0px 10px ${palette.primary.main}`,
                borderBottom: 0,
                zIndex: 2,
                position: 'relative',
                borderRadius: '10px 10px 0px 0px',
                overflow: 'visible',
              },
              '& .MuiTab-root': {
                mt: 2,
              },
            }}
            variant={isDesktop ? 'standard' : 'scrollable'}
            centered={isDesktop ? true : false}
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
          <Box
            p={5}
            sx={{
              border: `1px solid ${palette.primary.main}`,
              boxShadow: `0px 0px 10px ${palette.primary.main}`,
              background: '#10172a',
              mt: -0.3,
              zIndex: 0,
              borderRadius: 2,
              minHeight: 80,
              transition: 'flex 0.3s',
            }}
          >
            <Stack alignItems="flex-start">
              {chains[tab].swaps &&
                chains[tab].swaps.map((item, index) => {
                  return (
                    <Stack key={index}>
                      <Item {...item} index={index} />
                    </Stack>
                  );
                })}
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Stack>
  );
};

export default React.memo(Mobile);
