import { LogoIcon } from 'assets/icons';
import { IconButton, styled } from 'components';
import { useRouter } from 'next/router';
import React from 'react';

const Logo = styled((props) => {
  const router = useRouter();
  return (
    <IconButton
      onClick={() => {
        router.push('/');
      }}
    >
      <LogoIcon width={60} height={60} {...props} />
    </IconButton>
  );
})``;

export default React.memo(Logo);
