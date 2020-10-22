/* eslint-disable react/prop-types */
import { ThemeProvider } from 'styled-components';
import DefaultLayout from '@layouts/default';
import GlobalStyles from '@styles/globals';
import theme from '@themes/light';

export default function App({ Component, pageProps }) {
  const Layout = Component.Layout || DefaultLayout;
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <GlobalStyles />
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  );
}
