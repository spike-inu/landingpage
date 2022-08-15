import { Image } from 'components';
import React from 'react';

const Icon = () => {
  return <Image src="/images/cronos-logo.png" width={44} loading="lazy" />;
};

export default React.memo(Icon);
