import { useEffect, useState } from 'react';
import { Box, IconButton, IconButtonProps, Slide, Stack, styled } from 'components';
import { UpIcon } from 'assets/icons';

const UpButton = styled((props: IconButtonProps) => {
  return (
    <IconButton {...props}>
      <UpIcon />
    </IconButton>
  );
})`
  height: 100%;
  background-color: #2b2f29;
  opacity: 1;
  svg {
    opacity: 0.7;
  }
  :hover {
    filter: brightness(1.3);
    background-color: #2b2f29;
    svg {
      opacity: 1;
    }
  }
  transition: 0.5s;
`;

const BackToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      if (scrolled > 300) {
        setVisible(true);
      } else if (scrolled <= 300) {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', toggleVisible);
    return () => {
      window.removeEventListener('scroll', toggleVisible);
    };
  });

  return (
    <Box position="fixed" bottom={{ xs: 2, md: 24 }} right={{ xs: 2, md: 24 }}>
      <Slide direction="up" in={visible}>
        <Stack width={56} height={56}>
          <UpButton
            onClick={() => {
              if (window) {
                window.scrollTo({
                  top: 0,
                  behavior: 'smooth',
                });
              }
            }}
          />
        </Stack>
      </Slide>
    </Box>
  );
};

export default BackToTopButton;
