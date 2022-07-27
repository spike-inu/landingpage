import { Box } from '@mui/system';
import { Grid, Page, Stack, Title } from 'components';
import React from 'react';
import BackgroundGrid from '../components/BackgroundGrid';
import ReadMore from './components/ReadMore';
import data from './data';
import Item from './Item';

const View: React.FC = () => {
  return (
    <Stack>
      <BackgroundGrid width={400} right={0} />
      <Page spacing={15} alignItems="center">
        <Stack textAlign="center" spacing={2} position="relative">
          <Title>What Services We Offer</Title>
        </Stack>
        <Box px={4}>
          <Grid container spacing={10}>
            {data.map((item, index) => {
              return <Item key={index} {...item} />;
            })}
          </Grid>
        </Box>

        <ReadMore />
      </Page>
    </Stack>
  );
};

export default React.memo(View);
