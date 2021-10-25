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

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <GlobalStyle />
        <ModalStyleGlobal />
        <Component {...pageProps} />
        <ToastContainer newestOnTop transition={Flip} position="top-right" />
        <ReactQueryDevtools />
      </AuthProvider>
    </QueryClientProvider>
  );
}
