import React, { useMemo } from 'react';
import Providers from '../src/Providers';
import Menu from '../src/views/menu';
import BackToTopButton from '../src/views/back-top-top';
import './global.scss';

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
          <BackToTopButton />
        </>
      </Providers>
    </React.Fragment>
  );
}

export default App;
