import { Image } from 'components';
import React from 'react';

const Icon = () => {
  return (
    <Image
      src="https://assets.coingecko.com/coins/images/13928/small/PSigc4ie_400x400.jpg?1612875614"
      width={44}
      loading="lazy"
    />
  );
};

export default React.memo(Icon);
