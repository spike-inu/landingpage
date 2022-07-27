import { useDetect } from 'hooks';
import React from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';

const View: React.FC = () => {
  const { isMobile } = useDetect();
  if (isMobile) {
    return <Mobile />;
  }

  return <Desktop />;
};

export default React.memo(View);
