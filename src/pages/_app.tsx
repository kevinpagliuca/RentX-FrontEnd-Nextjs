import React from 'react';
import { QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ToastContainer, Flip } from 'react-toastify';

import { AppProps } from 'next/app';
import 'react-toastify/dist/ReactToastify.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css';

import { ThemeProvider } from '@material-ui/core';
import { AuthProvider } from 'contexts/AuthContext';
import { LoaderProvider } from 'contexts/LoaderContext';
import { RentalDateProvider } from 'contexts/RentalDateContext';
import { queryClient } from 'services/reactQuery/queryClient';
import { GlobalStyle, ModalStyleGlobal } from 'styles/global';
import { theme } from 'styles/theme';

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <AuthProvider>
          <RentalDateProvider>
            <GlobalStyle />
            <ModalStyleGlobal />
            <LoaderProvider>
              <Component {...pageProps} />
            </LoaderProvider>
            <ToastContainer
              newestOnTop
              transition={Flip}
              position="top-right"
              theme="dark"
              autoClose={3000}
            />
            <ReactQueryDevtools />
          </RentalDateProvider>
        </AuthProvider>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
