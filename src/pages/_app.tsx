import { AppProps } from 'next/app';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer, Flip } from 'react-toastify';
import { GlobalStyle, ModalStyleGlobal } from '../styles/global';
import { queryClient } from '../services/reactQuery/queryClient';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { AuthProvider } from '../contexts/AuthContext';
import { ThemeProvider } from '@material-ui/core';
import { theme } from 'styles/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <GlobalStyle />
          <ModalStyleGlobal />
          <Component {...pageProps} />
          <ToastContainer
            newestOnTop
            transition={Flip}
            position="top-right"
            theme="dark"
            autoClose={2500}
          />
          <ReactQueryDevtools />
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
