import { Box, Grid, Stack, styled, Subtitle, Text, Title } from 'components';
import React from 'react';
import { ItemProps } from './types';

const Dot = styled(Box)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  box-shadow: 0 0 18px #ffffff80;
  background: #ffffff;
`;
const Wrapper = styled(Stack)(
  ({ theme }) => `
        user-select:none;
          // .subtitle-0-0::first-letter{
          //   color:${theme.palette.primary.main};
          //   text-shadow: 0px 0px 8px ${theme.palette.primary.main};
          // }
    `,
);

const View: React.FC<ItemProps> = ({ title, contents, index }) => {
  return (
    <Wrapper p={10} spacing={5} alignItems="flex-start">
      <Dot />
      <Title color="white">{title}</Title>
      <Stack spacing={5}>
        {contents.map((item, i) => {
          return (
            <Stack key={i} spacing={4} width="100%">
              <Stack direction="row" spacing={4} alignItems="center">
                <Box width={8} height={8} bgcolor="white" sx={{ transform: 'rotate(45deg)' }} />
                <Subtitle className={`subtitle-${index}-${i}`}>{item.title}</Subtitle>
              </Stack>
              {item.contents && (
                <Box flex={1}>
                  <Grid container ml={2} spacing={4} flex={1}>
                    {item.contents.map((content, j) => {
                      return (
                        <Grid item key={j} sm={6} xs={item.contents.length === 1 ? 12 : 6}>
                          <Stack alignItems="baseline" direction="row" spacing={2}>
                            <Box
                              width={4}
                              height={4}
                              bgcolor="text.disabled"
                              sx={{ borderRadius: '50%', transform: 'translateY(-50%)' }}
                            />
                            <Text color="text.disabled" textAlign="left">
                              {content}
                            </Text>
                          </Stack>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Box>
              )}
            </Stack>
          );
        })}
      </Stack>
    </Wrapper>
  );
};

export default React.memo(View);
