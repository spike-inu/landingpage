import { Pressable, useTheme } from 'components';
import React, { FC, memo } from 'react';

const View: FC = () => {
  const { palette } = useTheme();
  return (
    <Pressable
      variant="outlined"
      sx={{
        ':hover': { boxShadow: `0px 0px 39px ${palette.primary.main}`, bgcolor: palette.background.default },
      }}
    >
      Apply to get your token listed
    </Pressable>
  );
};

export default memo(View);
