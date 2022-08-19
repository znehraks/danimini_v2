import type { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import { ThemeProvider } from 'styled-components';

import MainLayout from './components/layout/MainLayout';
import { GlobalStyle } from './components/styles/GlobalStyles';
import defaultTheme from './components/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <ThemeProvider theme={defaultTheme}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </ThemeProvider>
    </RecoilRoot>
  );
}

export default MyApp;
