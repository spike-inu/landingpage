import { LogoIcon } from 'assets/icons';
import { AppName, Stack, styled } from 'components';
import React from 'react';
const Name = styled(AppName)``;

const View: React.FC = () => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <LogoIcon height={32} />
      <Name variant="h5" />
    </Stack>
  );
};

export default React.memo(View);
