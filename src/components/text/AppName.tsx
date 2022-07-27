import { styled, TypographyProps } from '@mui/material';
import { APP_NAME } from 'configs';
import React from 'react';
import Text from './Text';

const AppName = styled((props: TypographyProps) => {
  return (
    <Text fontWeight="bold" {...props}>
      {APP_NAME}
    </Text>
  );
})(
  ({ theme }) => `
        ::first-letter{
          color:${theme.palette.primary.main};
          text-shadow: 0px 0px 8px ${theme.palette.primary.main};
        }
  `,
);
export default React.memo(AppName);
