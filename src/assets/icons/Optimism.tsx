import { Image } from 'components';
import React from 'react';

const Icon = () => {
  return <Image src="/images/optimism-logo.png" width={40} loading="lazy" />;
};

export default React.memo(Icon);
