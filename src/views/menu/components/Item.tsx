import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { Stack, Text, ButtonBase, styled, Box, Menu, MenuItem } from 'components';
import React, { FC, useCallback, useMemo } from 'react';
import { ItemProps } from '../types';

const Line = styled(Stack)(
  ({ theme }) => `
    background: ${theme.palette.primary.main};
    box-shadow: 0px 0px 8px ${theme.palette.primary.main};
    border-radius: 10px;
    height:2px;
`,
);

const View: FC<ItemProps> = ({ title, index, subs }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (subs.length > 0) {
        setAnchorEl(event.currentTarget);
        return;
      }
    },
    [subs.length],
  );

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const open = useMemo(() => {
    return Boolean(anchorEl);
  }, [anchorEl]);
  const active = useMemo(() => {
    if (index === 0) {
      return true;
    }
    return false;
  }, [index]);
  return (
    <Box position="relative">
      <ButtonBase
        id="menu-button"
        onClick={handleClick}
        arial-controls={open ? 'sub-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
      >
        <Stack px={4} py={2} spacing={1} alignItems="center">
          <Stack direction="row" alignItems="center">
            <Text color={active ? 'text.primary' : 'text.disabled'} fontWeight="bold">
              {title}
            </Text>
            {subs.length > 0 ? open ? <ArrowDropUp color="disabled" /> : <ArrowDropDown color="disabled" /> : null}
          </Stack>

          <Line sx={{ opacity: active ? 1 : 0, width: '100%' }} />
        </Stack>
      </ButtonBase>

      <Menu
        id="sub-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'menu-button',
        }}
        PaperProps={{ elevation: 2 }}
      >
        <Stack spacing={2} sx={{ bgcolor: 'background.paper', p: 4, borderRadius: 1 }}>
          {subs.map((sub, i) => {
            return (
              <MenuItem key={i} onClick={handleClose}>
                <Text color={active ? 'text.primary' : 'text.disabled'} fontWeight="bold">
                  {sub.title}
                </Text>
              </MenuItem>
            );
          })}
        </Stack>
      </Menu>
    </Box>
  );
};

export default React.memo(View);
