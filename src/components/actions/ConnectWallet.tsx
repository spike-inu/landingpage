import { WalletIcon } from 'assets/icons';
import { Pressable } from 'components';
import React, { FC } from 'react';

const View: FC = () => {
  return (
    <Pressable
      variant="outlined"
      sx={{
        borderRadius: 2,
        px: 2,
        py: 1,
        color: 'white',
        ':hover': { color: 'primary.main' },
      }}
      startIcon={<WalletIcon width={16} height={16} />}
    >
      Connect Wallet
    </Pressable>
  );
};

export default React.memo(View);
