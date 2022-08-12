import { Box, Image, Page, Stack, Text, Title } from 'components';
import partnership from 'data/partnership';
import React from 'react';

const View: React.FC = () => {
  return (
    <Page spacing={10} px={{ xs: 0, md: 20 }}>
      <Box px={{ xs: 4, md: 15 }} py={{ xs: 15, md: 20 }} bgcolor="#121212" position="relative">
        <Box position="absolute" top={0} right={0} height="100%">
          <Image src="/images/partnership.png" height="100%" loading="lazy" />
        </Box>

        <Stack textAlign={{ xs: 'center', md: 'left' }} spacing={2} position="relative">
          <Text sx={{ opacity: 0.47 }}>Partnership</Text>
          <Stack direction="row">
            <Title>Be part of a </Title>
            <Title color="primary.main">cross-chain</Title>
            <Title> future</Title>
          </Stack>
        </Stack>

        <Stack mt={15} spacing={10} width={{ xs: '100%', md: '60%' }}>
          {partnership.map((item, index) => (
            <Box key={index}>
              <Text color="primary.main">{item.title}</Text>
              <Text>{item.description}</Text>
            </Box>
          ))}
        </Stack>
      </Box>
    </Page>
  );
};

export default React.memo(View);
