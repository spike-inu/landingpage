import { Pressable } from 'components';
import React, { FC, memo } from 'react';
import { LoadingButtonProps } from '@mui/lab';

const View: FC<LoadingButtonProps> = (props) => {
  return <Pressable {...props}>Audit</Pressable>;
};

export default memo(View);
