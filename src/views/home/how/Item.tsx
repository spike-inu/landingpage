import { Stack, Text } from 'components';
import React from 'react';
import { HowToUseItemProps } from './types';

const View: React.FC<HowToUseItemProps> = (props) => {
  const { title, index } = props;
  return (
    <Stack direction="row" spacing={4} alignItems="center">
      <Stack
        bgcolor="#202020"
        borderRadius="50%"
        width={50}
        height={50}
        alignItems="center"
        justifyContent="center"
        fontSize={20}
        fontWeight={600}
        color="rgba(255, 255, 255, 0.47)"
      >
        {index + 1}
      </Stack>
      <Stack flexDirection="row">
        <Text color="primary.main" fontSize={16}>
          {title.slice(0, title.indexOf(' '))}
        </Text>
        <Text fontSize={16}>{title.slice(title.indexOf(' '))}</Text>
      </Stack>
    </Stack>
  );
};

export default React.memo(View);
