import { GlobalStyle } from "../styles/global";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "../services/queryClient";
import { ToastContainer, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AuthProvider } from "../contexts/AuthContext";



function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {/* <ConfigProvider cache={cache}> */}
          <GlobalStyle />
          <ReactQueryDevtools />
          <Component {...pageProps} />
          <ToastContainer newestOnTop transition={Flip} position="top-right" />
        {/* </ConfigProvider> */}
      </AuthProvider>
    </QueryClientProvider>
  );
}

export default MyApp;
