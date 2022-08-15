import { Image } from 'components';
import React from 'react';

const Icon = () => {
  return <Image src="/images/feature-transfer.png" width={50} loading="lazy" />;
};

export default React.memo(Icon);
