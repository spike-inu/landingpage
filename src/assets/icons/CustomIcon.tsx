import { Image } from 'components';
import React from 'react';

const Icon = ({ src }: { src: string }) => {
  return <Image src={src} width={44} loading="lazy" />;
};

export default React.memo(Icon);
