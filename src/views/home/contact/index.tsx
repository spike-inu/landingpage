import { Box, Grid, Page, Stack, Title, useTheme } from 'components';
import socials from 'data/social';
import React from 'react';
import Item from './Item';

const View: React.FC = () => {
  const { palette } = useTheme();
  return (
    <Stack>
      <Page spacing={10}>
        <Stack direction="row" spacing={5} alignItems="center" justifyContent="center">
          <Box
            sx={{
              width: 24,
              height: 24,
              bgcolor: 'primary.main',
              borderRadius: '50%',
              boxShadow: `0px 0px 34px ${palette.primary.main}`,
            }}
          ></Box>
          <Title>Contact</Title>
        </Stack>

        <Box>
          <Grid container spacing={4} justifyContent="center">
            {socials.map((item, index) => {
              return <Item key={index} index={index} {...item} />;
            })}
          </Grid>
        </Box>
      </Page>
    </Stack>
  );
};

export default React.memo(View);
