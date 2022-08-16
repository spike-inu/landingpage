import { Box, Stack, Text } from 'components';
import React, { FC, useEffect, useState } from 'react';
import { ItemContentProps, ItemProps } from '../types';
import { ActiveDot, InactiveDot } from './PhaseDot';

const MIN_SPACE_SAME_SIDE = 32;
const MIN_SPACE_OPPOSITE_SIDE = 32;

interface PhaseNodeProps {
  width: number;
  height: number;
  padding: number;
}

const PhaseNode: FC<PhaseNodeProps & { inactive?: boolean }> = ({ children, inactive, width, height, padding }) => {
  return (
    <Box
      px={padding / 4}
      sx={{
        filter: 'drop-shadow(0px 4px 20px rgba(135, 228, 46, 0.5))',
      }}
    >
      <Stack
        bgcolor={inactive ? '#91FE39' : 'primary.main'}
        color={inactive ? 'text.primary' : undefined}
        width={width}
        height={height}
        alignItems="center"
        justifyContent="center"
        fontSize={{ xs: 14, md: 16 }}
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
          width={width - 2}
          height={height - 2}
          sx={{ clipPath: 'polygon(50% 0%, 95% 25%, 95% 75%, 50% 100%, 5% 75%, 5% 25%)' }}
        />
        {children}
      </Stack>
    </Box>
  );
};

interface NodeData {
  position: number;
  height: number;
}

interface PhaseContentProps {
  data: ItemContentProps;
  side: 'left' | 'right';
  inactive?: boolean;
  index?: number;
  nodes: NodeData[];
  setNodes: React.Dispatch<React.SetStateAction<NodeData[]>>;
  y: number;
  x: number;
}

const PhaseContent = ({ data, side = 'left', inactive, index, nodes, setNodes, x, y }: PhaseContentProps) => {
  return (
    <Stack
      ref={(ref: HTMLDivElement | null) => {
        if (!ref) return;
        if (nodes[index].height) return;
        const newNodes = [...nodes];
        if (index === 0) {
          newNodes[0] = {
            position: 0,
            height: ref.clientHeight,
          };
          setNodes(newNodes);
        } else if (index === 1) {
          newNodes[1] = {
            position: MIN_SPACE_OPPOSITE_SIDE,
            height: ref.clientHeight,
          };
          setNodes(newNodes);
        } else if (newNodes[index - 2].height) {
          newNodes[index] = {
            position: newNodes[index - 2].position + newNodes[index - 2].height + MIN_SPACE_SAME_SIDE,
            height: ref.clientHeight,
          };
          setNodes(newNodes);
        }
      }}
      sx={{ marginTop: y ? y / 4 : undefined }}
    >
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
            border={inactive ? '1px solid #1B300A' : '1px solid #2C3F1B'}
            width={x}
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
            left={side === 'left' ? undefined : -x}
            right={side === 'left' ? -x : undefined}
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

interface PhaseProps {
  item: ItemProps;
  size?: 'xs' | 'md';
  fadeOut?: boolean;
}

const Phase = ({ item, size = 'md', fadeOut = false }: PhaseProps) => {
  const rightData = item.contents.filter((_, i) => i % 2 === 0);
  const leftData = item.contents.filter((_, i) => i % 2 === 1);
  const [nodes, setNodes] = useState(item.contents.map(() => ({ position: 0, height: 0 })));
  const finishNodeRendering = !!nodes[nodes.length - 1].height;
  const [marginTops, setMarginTops] = useState(item.contents.map(() => 0));

  const { width, height, padding } =
    size === 'xs' ? { width: 80, height: 80, padding: 0 } : { width: 120, height: 120, padding: 20 };

  useEffect(() => {
    if (finishNodeRendering) {
      const newNodes = nodes.reduce<(NodeData & { marginTop: number })[]>((prev, node, index) => {
        if (index === 0 || index === 1) {
          return [...prev, { ...node, marginTop: node.position }];
        }
        const marginTop =
          prev[index - 2].position + prev[index - 2].height + MIN_SPACE_SAME_SIDE >
          prev[index - 1].position + MIN_SPACE_OPPOSITE_SIDE
            ? MIN_SPACE_SAME_SIDE
            : prev[index - 1].position + MIN_SPACE_OPPOSITE_SIDE - (prev[index - 2].position + prev[index - 2].height);
        return [...prev, { ...node, position: node.position + marginTop - MIN_SPACE_SAME_SIDE, marginTop }];
      }, []);
      setMarginTops(newNodes.map((node) => node.marginTop));
    }
  }, [finishNodeRendering, nodes]);

  return (
    <Stack direction="row" position="relative" justifyContent="center">
      <Box
        border={item.inactive ? '1px solid #1B300A' : '1px solid #2C3F1B'}
        height="100%"
        position="absolute"
        top={0}
        left="50%"
        sx={{ transform: 'translateX(-50%)' }}
      />
      {fadeOut && (
        <Box
          height={50}
          position="absolute"
          bottom={-50}
          left="50%"
          sx={{
            borderWidth: '1px',
            borderStyle: 'solid',
            borderImage: item.inactive
              ? 'linear-gradient(to bottom, #1B300A, rgba(0, 0, 0, 0)) 1 100%'
              : 'linear-gradient(to bottom, #2C3F1B, rgba(0, 0, 0, 0)) 1 100%',
            transform: 'translateX(-50%)',
          }}
        />
      )}
      <Stack flex={1} mt={36} mb={6} sx={{ maxWidth: `calc(50% - ${width / 2}px)` }}>
        {leftData.map((data, index) => (
          <PhaseContent
            key={data.title}
            side="left"
            inactive={item.inactive}
            index={index * 2 + 1}
            y={marginTops[index * 2 + 1]}
            x={width / 2 + padding}
            {...{ data, nodes, setNodes, finishNodeRendering }}
          />
        ))}
      </Stack>
      <PhaseNode inactive={item.inactive} {...{ width, height, padding }}>
        {item.title}
      </PhaseNode>
      <Stack flex={1} mt={36} mb={6} sx={{ maxWidth: `calc(50% - ${width / 2}px)` }}>
        {rightData.map((data, index) => (
          <PhaseContent
            key={data.title}
            side="right"
            inactive={item.inactive}
            index={index * 2}
            y={marginTops[index * 2]}
            x={width / 2 + padding}
            {...{ data, nodes, setNodes, finishNodeRendering }}
          />
        ))}
      </Stack>
    </Stack>
  );
};

export default Phase;
