import { Grid, Stack, Subtitle, Title, Text } from 'components';
import React from 'react';
import DashboardItem from './components/DashboardItem';
import data from './data';
import useDetect from 'hooks/useDetect';

const Desktop: React.FC = () => {
  return (
    <Grid maxWidth="lg" container sx={{ mt: -30, py: 10 }} spacing={5} justifyContent="space-between">
      {data.dashboards.map((item, index) => {
        return (
          <Grid item xs={3} md={3} key={index}>
            <DashboardItem {...item} />
          </Grid>
        );
      })}
    </Grid>
  );
};

const Mobile: React.FC = () => {
  return (
    <Stack direction="row">
      {data.dashboards.map((item, index) => {
        const { value, unit, Icon, name } = item;
        return (
          <Stack key={index} flex={1} alignItems="center">
            <Icon width={80} height={80} />
            <Stack direction="row" spacing={0} alignItems="baseline" sx={{ userSelect: 'none', textAlign: 'center' }}>
              <Text color="primary.main" variant="body1" sx={{ fontWeight: 600 }}>
                {value}
              </Text>
              <Text color="primary.main">{unit}</Text>
            </Stack>
            <Text textAlign="center" variant="body2">
              {name}
            </Text>
          </Stack>
        );
      })}
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
