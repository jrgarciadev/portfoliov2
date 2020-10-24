import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { Loader } from '@components';
import { SkipToContentLink } from './styles';
import Main from './main';
import BaseLayout from './base';
import Navbar from './navbar';

const DefaultLayout = ({ children }) => {
  const router = useRouter();
  const isHome = router.pathname === '/';
  const isBrowser = typeof window !== `undefined`;
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    if (isLoading || !isBrowser) {
      return;
    }
    if (window.location.hash) {
      const id = window.location.hash.substring(1); // location.hash without the '#'
      setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView();
          el.focus();
        }
      }, 0);
    }
  }, [isLoading]);

  return (
    <BaseLayout>
      <>
        <SkipToContentLink href="#content">Skip to Content</SkipToContentLink>
        {isLoading && isHome ? (
          <Loader onFinish={() => setIsLoading(false)} />
        ) : (
          <>
            <Navbar isHome={isHome} />
            <Main id="content">{children}</Main>
          </>
        )}
      </>
    </BaseLayout>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
};

export default DefaultLayout;
