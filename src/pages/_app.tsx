import { GlobalStyle } from "../styles/global";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import { queryClient } from "../services/queryClient";



function MyApp({ Component, pageProps }) {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyle />
      <ReactQueryDevtools/>
      <Component {...pageProps} />
    </QueryClientProvider>
  );
}

export default MyApp;
