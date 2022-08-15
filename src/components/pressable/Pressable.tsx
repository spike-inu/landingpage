import { LoadingButton, LoadingButtonProps } from '@mui/lab';
import { styled, useTheme } from 'components';
import React, { FC } from 'react';

const Button = styled(LoadingButton)``;

export type PressableProps = LoadingButtonProps;

const Pressable: FC<PressableProps> = (props) => {
  const { palette } = useTheme();
  const { sx, ...otherProps } = props;
  return (
    <Button
      variant="outlined"
      fullWidth={false}
      sx={{
        fontWeight: 'bold',
        textTransform: 'none',
        borderRadius: 1,
        borderWidth: 1,
        ':hover': {
          boxShadow: `0px 0px 12px ${palette.primary.main}`,
          bgcolor: palette.primary.main,
          color: 'black',
        },
        transition: '0.4s',
        ...sx,
      }}
      {...otherProps}
    />
  );
};

export default React.memo(Pressable);
