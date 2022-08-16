import { Pressable } from 'components';
import React, { FC, memo } from 'react';
import { LoadingButtonProps } from '@mui/lab';

const View: FC<LoadingButtonProps> = (props) => {
  return (
    <Pressable
      onClick={() => {
        if (window) {
          window.open('https://app.icrosschain.io/', '_blank');
        }
      }}
      {...props}
    >
      Launch App
    </Pressable>
  );
};

export default memo(View);
