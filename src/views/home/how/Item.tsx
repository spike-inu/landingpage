import { Stack, Text } from 'components';
import React from 'react';
import { HowToUseItemProps } from './types';

const View: React.FC<HowToUseItemProps> = (props) => {
  const { Icon, title, description, index } = props;
  return (
    <Stack direction="row" spacing={4} alignItems="center">
      <Stack width={60}>
        <Icon />
      </Stack>

      <Stack>
        <Stack direction="row" spacing={1}>
          <Text color="primary.main" fontWeight="bold">
            {index + 1}.
          </Text>
          <Text fontWeight="bold">{title}</Text>
        </Stack>

        {/* <Text color="text.disabled">{description}</Text> */}
      </Stack>
    </Stack>
  );
};

export default React.memo(View);
