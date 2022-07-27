import { Box, Grid, Stack, styled, Subtitle, Text, Title } from 'components';
import React from 'react';
import { ItemProps } from './types';

const BeforePhase = styled(Stack)`
  position: relative;
  transform: skew(-12deg, 0deg);
  height: 40px;
  width: 39px;
  background: #91fe39;
  left: -10px;
`;

const BackgroundPhase = styled(Stack)`
  position: relative;
  height: 40px;
  align-items: flex-start;
  justify-content: center;
  background: url('images/bg-phase.svg') no-repeat;
`;
const Wrapper = styled(Stack)(
  ({ theme }) => `
        user-select:none;
          // .subtitle-0-0::first-letter{
          //   color:${theme.palette.primary.main};
          //   text-shadow: 0px 0px 8px ${theme.palette.primary.main};
          // };
         
    `,
);

const View: React.FC<ItemProps> = ({ title, contents, index }) => {
  return (
    <Wrapper p={10} spacing={10} width="90vw" height="100%">
      <Stack sx={{ border: '2px solid #5F626C', borderRadius: 5, p: 1, height: '100%' }}>
        <Stack spacing={8} sx={{ borderRadius: 4, p: 4, bgcolor: 'background.paper', height: '100%' }}>
          <Stack direction="row" sx={{ overflow: 'hidden' }}>
            <BeforePhase />
            <BackgroundPhase flex={1}>
              <Title color="black" ml={5} sx={{ fontWeight: 'bold' }}>
                {title}
              </Title>
            </BackgroundPhase>
          </Stack>

          {contents.map((item, i) => {
            return (
              <Stack key={i} spacing={4} width="100%">
                <Stack direction="row" spacing={4} alignItems="center">
                  <Box width={8} height={8} bgcolor="primary.main" sx={{ transform: 'rotate(45deg)' }} />
                  <Subtitle className={`subtitle-${index}-${i}`}>{item.title}</Subtitle>
                </Stack>
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
              </Stack>
            );
          })}
        </Stack>
      </Stack>
    </Wrapper>
  );
};

export default React.memo(View);
