import { LogoIcon } from 'assets/icons';
import { Stack } from 'components';
import React from 'react';

const View: React.FC = () => {
  return (
    <Stack direction="row" spacing={2} alignItems="center">
      <LogoIcon height={32} />
    </Stack>
  );
};

export default React.memo(View);
