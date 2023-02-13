import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { Stack, Text, ButtonBase, Box, Menu, MenuItem } from 'components';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { FC, useCallback, useMemo } from 'react';
import { ItemProps } from '../types';

const View: FC<ItemProps> = ({ title, subtitle, href, subs }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const router = useRouter();

  const handleClick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      if (subs.length > 0) {
        setAnchorEl(event.currentTarget);
      } else if (href) {
        router.push(href);
      }
    },
    [href, router, subs.length],
  );

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const open = useMemo(() => {
    return Boolean(anchorEl);
  }, [anchorEl]);

  return (
    <Box position="relative">
      {subs.length ? (
        <>
          <ButtonBase
            onClick={handleClick}
            arial-controls={open ? 'sub-menu' : undefined}
            aria-expanded={open ? 'true' : undefined}
            aria-haspopup="true"
            sx={{
              color: open ? 'primary.main' : 'text.disabled',
              ':hover': {
                color: 'primary.main',
              },
            }}
          >
            <Stack px={4} py={2} alignItems="center">
              <Stack direction="row" alignItems="center">
                <Text color="inherit" fontWeight="bold">
                  {title}
                </Text>
                {subs.length > 0 ? open ? <ArrowDropUp color="inherit" /> : <ArrowDropDown color="inherit" /> : null}
              </Stack>
              <Text color="inherit" fontSize={12}>
                {subtitle}
              </Text>
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
            <Stack spacing={2} border="1px solid #434540" borderRadius={1} p={2} bgcolor="background.paper">
              {subs.map((sub, i) => (
                <MenuItem key={i} onClick={handleClose} sx={{ py: 2, px: 6, mt: '0 !important', borderRadius: 1 }} >
                  <Link
                    key={sub.href}
                    href={sub.href}
                    className="text-sm font-semibold text-white text-opacity-50 hover:text-primary"
                  >
                    <Text color="text.primary" fontWeight="bold">
                      {sub.title}
                    </Text>
                  </Link>
                </MenuItem>
              ))}
            </Stack>
          </Menu>
        </>
      ) : (
        <Link href={href}>
          <Stack
            px={4}
            py={2}
            alignItems="center"
            sx={{
              cursor: 'pointer',
              color: open ? 'primary.main' : 'text.disabled',
              ':hover': {
                color: 'primary.main',
              },
            }}
          >
            <Text color="inherit" fontWeight="bold" lineHeight="24px">
              {title}
            </Text>
            <Text color="inherit" fontSize={12}>
              {subtitle}
            </Text>
          </Stack>
        </Link>
      )}
    </Box>
  );
};

export default React.memo(View);
