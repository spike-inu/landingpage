import { Box, Stack, Text } from 'components';
import React from 'react';
import { HowToUseItemProps } from './types';

const View = ({
  title,
  index,
  direction = 'row',
  isLast,
}: { direction?: 'column' | 'row'; isLast?: boolean } & HowToUseItemProps) => {
  return (
    <Stack direction={direction} spacing={4} alignItems="center" position="relative">
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
      {direction === 'column' && !isLast && (
        <Box
          position="absolute"
          bottom={-50}
          left="50%"
          height={40}
          border="1px dashed #2C3F1B"
          sx={{ transform: 'translateX(-50%)' }}
        />
      )}
    </Stack>
  );
};

export default React.memo(View);
