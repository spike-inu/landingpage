import React, { useMemo } from 'react';
import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Providers from '../src/Providers';
import Menu from '../src/views/menu';
import './global.scss';
import './swipe.css';

function App({ Component, pageProps }) {
  const showMenu = useMemo(() => {
    return true;
  }, []);
  return (
    <React.Fragment>
      <Providers>
        <>
          {showMenu && <Menu />}
          <Component {...pageProps} />
        </>
      </Providers>
    </React.Fragment>
  );
}

export default App;
