import { Stack, StackProps, styled } from 'components';
import React from 'react';
import Contact from './contact';
import Feature from './feature';
import Introduction from './introduction';
import Partner from './partner';
import Support from './support';
import Token from './token';
import Footer from 'views/footer';
import Report from './report';
import How from './how';
import Roadmap from './roadmap';
import Partnership from './partnership';

const Wrapper = styled((props: StackProps) => {
  return <Stack bgcolor="background.default" position="relative" overflow="hidden" {...props} />;
})``;

const View: React.FC = () => {
  return (
    <Wrapper>
      <Introduction />
      <Feature />
      <Support />
      <How />
      <Token />
      <Roadmap />
      <Partner />
      <Partnership />
      <Report />
      <Contact />
      <Footer />
    </Wrapper>
  );
};

export default View;
