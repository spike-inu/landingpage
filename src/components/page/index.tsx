import { StackProps } from '@mui/material';
import { Stack, Container } from 'components';
import React from 'react';

const Page: React.FC<StackProps> = (props) => {
  return (
    <Container maxWidth="lg">
      <Stack position="relative" py={20} {...props} />
    </Container>
  );
};

export default Page;
