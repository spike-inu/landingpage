import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { CloseIcon, LogoIcon, MenuIcon } from 'assets/icons';
import {
  AppBar,
  AppName,
  Audit,
  Collapse,
  IconButton,
  LaunchApp,
  List,
  ListItemButton,
  Stack,
  StackProps,
  styled,
  SwipeableDrawer,
  Text,
  Toolbar,
} from 'components';
import React, { Fragment, useState } from 'react';
import HideOnScroll from './components/HideOnScroll';
import data from './data.json';

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
    width: '100% ',
  },
}));

const DrawerWrapper = styled((props: StackProps) => {
  return (
    <Stack
      flex={1}
      sx={{
        bgcolor: '#02071B',
        p: 4,
        position: 'relative',
        zIndex: 2,
      }}
      {...props}
    />
  );
})``;

const MobileMenu: React.FC = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [expanded, setExpanded] = useState(new Set());
  const handleClickSubMenu = (item: string) => {
    console.log({ item });
    const newExpanded = new Set(expanded);
    if (newExpanded.has(item)) {
      newExpanded.delete(item);
    } else {
      newExpanded.add(item);
    }
    setExpanded(newExpanded);
  };
  // const [openSubMenu, setOpenSubMenu] = React.useState(true);
  // const handleOpenSubMenu = () => {
  //   setOpenSubMenu(!openSubMenu);
  // };

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
                <LaunchApp />
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
          <Stack direction="row" justifyContent="flex-end">
            <IconButton onClick={handleClose}>
              <CloseIcon />
            </IconButton>
          </Stack>
          <Stack direction="row" spacing={2} mt={4}>
            <Audit fullWidth />
            <LaunchApp fullWidth />
          </Stack>
          <List component="nav" aria-labelledby="nested-list-subheader">
            {data.items.map((item) =>
              item.subs.length ? (
                <Fragment key={item.title}>
                  <ListItemButton
                    onClick={() => handleClickSubMenu(item.title)}
                    sx={{ mt: 4, py: 2.5, justifyContent: 'space-between' }}
                  >
                    <Text fontWeight={600}>{item.title}</Text>
                    {expanded.has(item.title) ? <ExpandLess /> : <ExpandMore />}
                  </ListItemButton>
                  <Collapse in={expanded.has(item.title)} timeout="auto">
                    <List component="div">
                      {item.subs.map((subItem) => (
                        <ListItemButton key={subItem.title} sx={{ pl: 8, py: 2.5 }}>
                          <Text fontWeight={600}>{subItem.title}</Text>
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                </Fragment>
              ) : (
                <ListItemButton key={item.title} sx={{ mt: 4, py: 2.5 }}>
                  <Text fontWeight={600}>{item.title}</Text>
                </ListItemButton>
              ),
            )}
          </List>
        </DrawerWrapper>
      </Drawer>
      {props.children}
    </>
  );
};

export default MobileMenu;
