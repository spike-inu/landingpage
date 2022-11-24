import { Image } from 'components';
import React from 'react';

const Icon = () => {
  return <Image src="/images/feature-security.png" width={50} height={50} loading="lazy" />;
};

export default React.memo(Icon);
