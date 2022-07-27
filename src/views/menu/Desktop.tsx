import { AppBar, Audit, Box, Container, LaunchApp, Stack, StackProps, styled, Toolbar } from 'components';
import React from 'react';
import Item from './components/Item';
import Logo from './components/Logo';
import data from './data.json';
import HideOnScroll from './components/HideOnScroll';

const Wrapper = styled((props: StackProps) => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      flex={1}
      spacing={12}
      sx={{ py: 4 }}
      {...props}
    />
  );
})({});

const Menu: React.FC = (props) => {
  return (
    <HideOnScroll {...props}>
      <AppBar elevation={1} sx={{ bgcolor: '#00000045' }}>
        <Toolbar>
          <Container maxWidth="lg">
            <Box>
              <Wrapper>
                <Stack direction="row" spacing={10}>
                  <Logo />
                  <Stack direction="row" spacing={4} alignItems="baseline">
                    {data.items.map((item, index) => {
                      return <Item key={index} {...item} index={index} />;
                    })}
                  </Stack>
                </Stack>
                <Stack direction="row" spacing={2}>
                  <Audit />
                  <LaunchApp />
                </Stack>
              </Wrapper>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default Menu;
