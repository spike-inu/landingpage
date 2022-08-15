import { Box, Stack, Text } from 'components';
import { FC } from 'react';
import { ItemContentProps, ItemProps } from '../types';
import { ActiveDot, InactiveDot } from './PhaseDot';

const PhaseNode: FC<{ inactive?: boolean }> = ({ children, inactive }) => {
  return (
    <Box px={5} sx={{ filter: 'drop-shadow(0px 4px 20px rgba(135, 228, 46, 0.5))' }}>
      <Stack
        bgcolor={inactive ? '#91FE39' : 'primary.main'}
        color={inactive ? 'text.primary' : undefined}
        width={120}
        height={120}
        alignItems="center"
        justifyContent="center"
        fontSize={16}
        fontWeight={600}
        sx={{
          clipPath: 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)',
        }}
        position="relative"
      >
        <Stack
          position="absolute"
          bgcolor={inactive ? '#1B300A' : 'primary.main'}
          zIndex={-1}
          width={118}
          height={118}
          sx={{ clipPath: 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)' }}
        />
        {children}
      </Stack>
    </Box>
  );
};

const PhaseContent = ({
  data,
  side = 'left',
  inactive,
  index,
}: {
  data: ItemContentProps;
  side: 'left' | 'right';
  inactive?: boolean;
  index?: number;
}) => {
  return (
    <Stack>
      <Stack direction={side === 'left' ? 'row' : 'row-reverse'} justifyContent="flex-end" spacing={2}>
        <Text
          fontWeight={600}
          sx={{ opacity: inactive ? 0.7 : 1, whiteSpace: 'normal !important' }}
          textAlign={side === 'left' ? 'right' : 'left'}
        >
          {data.title}
        </Text>
        <Stack position="relative" height={20} justifyContent="center">
          <Stack
            height={12}
            width={12}
            bgcolor={inactive ? '#1B300A' : 'primary.main'}
            zIndex={1}
            sx={{ clipPath: 'polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)', minWidth: 12 }}
          />
          <Box
            border={inactive ? '2px solid #1B300A' : '2px solid #2C3F1B'}
            width={80}
            position="absolute"
            top="50%"
            left={side === 'left' ? undefined : 2}
            right={side === 'left' ? 2 : undefined}
            sx={{ transform: side === 'left' ? 'translate(100%,-50%)' : 'translate(-100%,-50%)' }}
          />
          <Stack
            position="absolute"
            top="50%"
            width="fit-content"
            height="fit-content"
            left={side === 'left' ? undefined : -80}
            right={side === 'left' ? -80 : undefined}
            zIndex={index}
            sx={{ transform: side === 'left' ? 'translate(50%,-50%)' : 'translate(-50%,-50%)' }}
          >
            {inactive ? <InactiveDot /> : <ActiveDot />}
          </Stack>
        </Stack>
      </Stack>
      <Stack spacing={1} px={5} mt={4}>
        {data.contents.map((content) => (
          <Stack key={content} direction="row" justifyContent={side === 'left' ? 'flex-end' : 'flex-start'} spacing={2}>
            <Stack height={17} justifyContent="center">
              <Box bgcolor="primary.main" width={5} height={5} borderRadius="50%" />
            </Stack>
            <Text fontSize={12} sx={{ opacity: inactive ? 0.3 : 0.5 }} textAlign={side === 'left' ? 'right' : 'left'}>
              {content}
            </Text>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

const Phase = ({ item }: { item: ItemProps }) => {
  const rightData = item.contents.filter((_, i) => i % 2 === 0);
  const leftData = item.contents.filter((_, i) => i % 2 === 1);

  return (
    <Stack direction="row" position="relative">
      <Box
        border={item.inactive ? '2px solid #1B300A' : '2px solid #2C3F1B'}
        height="100%"
        position="absolute"
        top={0}
        left="50%"
        sx={{ transform: 'translateX(-50%)' }}
      />
      <Stack spacing={8} flex={1} mt={42} mb={6}>
        {leftData.map((data, index) => (
          <PhaseContent key={data.title} data={data} side="left" inactive={item.inactive} index={index * 2 + 2} />
        ))}
      </Stack>
      <PhaseNode inactive={item.inactive}>{item.title}</PhaseNode>
      <Stack spacing={8} flex={1} mt={36} mb={6}>
        {rightData.map((data, index) => (
          <PhaseContent key={data.title} data={data} side="right" inactive={item.inactive} index={index * 2 + 1} />
        ))}
      </Stack>
    </Stack>
  );
};

export default Phase;
