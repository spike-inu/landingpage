import { LogoIcon, MenuIcon } from 'assets/icons';
import {
  AppBar,
  AppName,
  Audit,
  IconButton,
  LaunchApp,
  Stack,
  StackProps,
  styled,
  SwipeableDrawer,
  Toolbar,
  useTheme,
  ConnectWallet,
  Grid,
  Box,
  Language,
} from 'components';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import HideOnScroll from './components/HideOnScroll';
import Item from './components/Item';
import data from './data.json';
import socials from 'data/social';

const Wrapper = styled((props: StackProps) => {
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ width: '100%', py: 4 }}
      {...props}
    />
  );
})({
  position: 'relative',
});

const AppNameStyled = styled(AppName)`
  ::first-letter {
    color: white;
  }
`;

const Drawer = styled(SwipeableDrawer)(() => ({
  opacity: 1,
  '.MuiDrawer-paper': {
    width: ' 80% ',
    maxWidth: 414,
  },
}));

const DrawerWrapper = styled((props: StackProps) => {
  const { palette } = useTheme();
  return (
    <Stack
      flex={1}
      sx={{
        bgcolor: '#02071B',
        border: `1px solid ${palette.primary.main}`,
        borderBottom: 'none',
        borderRight: 'none',
        borderTopLeftRadius: 20,
        boxShadow: `0px 0px 10px rgba(145, 254, 57, 0.2)`,
        mt: 20,
        p: 4,
        position: 'relative',
        zIndex: 2,
      }}
      {...props}
    />
  );
})``;

const IconSocialWrapper = styled(IconButton)`
  mix-blend-mode: luminosity;
  opacity: 0.5;
  :hover {
    mix-blend-mode: normal;
    opacity: 1;
  }
  transition: 0.5s;
`;

const MobileMenu: React.FC = (props) => {
  const router = useRouter();

  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleLogoPress = () => {
    router.push('/');
    handleClose();
  };
  return (
    <>
      <HideOnScroll>
        <AppBar position="fixed" elevation={2}>
          <Toolbar sx={{ bgcolor: '#111529b2' }}>
            <Wrapper>
              <Stack direction="row" alignItems="center" spacing={2}>
                <LogoIcon width={30} height={32} />
                <AppNameStyled fontSize={16} />
              </Stack>
              <Stack direction="row" spacing={2}>
                <ConnectWallet />
                <IconButton onClick={handleOpen}>
                  <MenuIcon />
                </IconButton>
              </Stack>
            </Wrapper>
          </Toolbar>
        </AppBar>
      </HideOnScroll>
      <Drawer
        anchor="right"
        open={open}
        elevation={0}
        onOpen={() => {
          handleOpen();
        }}
        onClose={handleClose}
        sx={{ bgcolor: 'transparent' }}
      >
        <DrawerWrapper>
          <Stack direction="row" alignItems="center" justifyContent="center">
            <IconButton onClick={handleLogoPress}>
              <LogoIcon width={28} height={28} />
            </IconButton>
            <AppNameStyled />
          </Stack>
          <Stack flex={1} spacing={4}>
            <Stack alignItems="flex-start" mt={5}>
              {data.items.map((item, index) => {
                return <Item key={index} {...item} index={index} />;
              })}
            </Stack>
            <Stack alignItems="flex-start">
              <Stack spacing={2}>
                <Audit fullWidth />
                <LaunchApp fullWidth />
              </Stack>
            </Stack>
          </Stack>
          <Box>
            <Grid container spacing={2} justifyContent="space-around" alignItems="baseline">
              {socials.map((item, index) => {
                const { Icon } = item;
                return (
                  <Grid display="flex" xs={3} alignItems="center" justifyContent="center" item key={index}>
                    <IconSocialWrapper>
                      <Icon width={28} height={28} />
                    </IconSocialWrapper>
                  </Grid>
                );
              })}
            </Grid>
          </Box>
          <Stack mt={5} alignItems="flex-start">
            <Language />
          </Stack>
        </DrawerWrapper>
      </Drawer>
      {props.children}
    </>
  );
};

export default MobileMenu;
