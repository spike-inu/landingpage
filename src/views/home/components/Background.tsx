import { Image, Stack, StackProps, styled } from 'components';
import Square from './Square';

const SquareStyled = styled(Square)`
  position: absolute;
  animation: square 10s infinite;
  animation-timing-function: linear;
`;

const Background = (props: StackProps) => (
  <Stack width="100%" height="100%" alignItems="center" justifyContent="center" {...props}>
    <Stack position="relative" height="100%">
      <Image src="/images/ic-introduction.png" height="100%" loading="lazy" />
      <Stack
        height="15%"
        width="15%"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        top="25%"
        left="10%"
      >
        <SquareStyled height="100%" width={undefined} />
      </Stack>
      <Stack
        height="10%"
        width="10%"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        bottom="20%"
        left="30%"
      >
        <SquareStyled height="100%" width={undefined} />
      </Stack>
      <Stack
        height="7%"
        width="7%"
        alignItems="center"
        justifyContent="center"
        position="absolute"
        top="20%"
        right="28%"
      >
        <SquareStyled height="100%" width={undefined} />
      </Stack>
    </Stack>
  </Stack>
);

export default Background;
