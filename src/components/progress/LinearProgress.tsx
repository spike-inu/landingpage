import { Stack, styled } from '@mui/material';
import MLinearProgress, { linearProgressClasses, LinearProgressProps } from '@mui/material/LinearProgress';
import { Box } from '@mui/system';
import { Text } from 'components';
import React from 'react';

const BorderLinearProgress = styled(MLinearProgress)(({ theme }) => ({
  height: 8,
  borderRadius: 10,
  border: `none`,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    // backgroundColor: theme['palette'].secondary.light,
  },
  [`& .${linearProgressClasses.bar}`]: {},
  [`& .${linearProgressClasses.bar2Buffer}`]: {
    backgroundColor: theme['palette'].primary.main,
  },
}));

const LinearProgress: React.FC<LinearProgressProps> = (props) => {
  const [progress, setProgress] = React.useState(0);
  const { value } = props;

  React.useEffect(() => {
    setProgress(0);
    const timer = setInterval(() => {
      setProgress((oldProgress) => {
        if (oldProgress > value) {
          clearInterval(timer);
          return value;
        }
        const diff = oldProgress < value - 5 ? (value - oldProgress) / 5 : 0.2;
        return oldProgress + diff;
      });
    }, 100);

    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <Stack direction="row" alignItems="center" spacing={4}>
      <Box sx={{ flex: 1 }}>
        <BorderLinearProgress variant="determinate" value={progress} />
      </Box>
      <Text sx={{ fontWeight: 600, minWidth: 40, textAlign: 'right', color: 'primary.main' }}>
        {Math.round(progress)}%
      </Text>
    </Stack>
  );
};

export default LinearProgress;
