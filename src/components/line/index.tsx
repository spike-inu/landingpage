import { Box, styled } from 'components';

interface Props {
  width?: number | string;
  height?: number | string;
  color?: string;
}

const Line = styled((props: Props) => {
  const { width = '100%', height = '100%', color = 'divider' } = props;
  return <Box height={height} width={width} sx={{ bgcolor: color }} />;
})({});

export default Line;
