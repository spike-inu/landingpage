import { Stack, styled, Title } from 'components';
import React from 'react';

const Wrapper = styled(Stack)({
  height: '100vh',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
});

const Introduction = () => {
  return (
    <Wrapper bgcolor="background.default">
      <Title textAlign="center" letterSpacing={12}>
        404
      </Title>
      <Title textAlign="center" letterSpacing={12}>
        NOT FOUND
      </Title>
    </Wrapper>
  );
};

export default React.memo(Introduction);
