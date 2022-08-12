import { Grid } from 'components';
import React from 'react';
import DashboardItem from './components/DashboardItem';
import data from './data';

const View: React.FC = () => {
  return (
    <Grid maxWidth="lg" container mt={5} px={{ xs: 5, md: 20 }} spacing={5} justifyContent="space-between">
      {data.dashboards.map((item, index) => (
        <Grid item xs={6} md={3} key={index}>
          <DashboardItem {...item} />
        </Grid>
      ))}
    </Grid>
  );
};

export default React.memo(View);
