import React from 'react';

import router from 'next/router';

interface LoaderContextData {
  customLoader: boolean;
}

export const LoaderContext = React.createContext({} as LoaderContextData);

interface LoaderProviderProps {
  children: React.ReactNode;
}
export const LoaderProvider = ({ children }: LoaderProviderProps) => {
  const [customLoader, setCustomLoader] = React.useState(false);

  const handleStart = () => {
    setCustomLoader(true);
  };

  const handleStop = () => {
    setCustomLoader(false);
  };

  React.useEffect(() => {
    router.events.on('routeChangeStart', handleStart);
    router.events.on('routeChangeComplete', handleStop);
    router.events.on('routeChangeError', handleStop);

    return () => {
      router.events.off('routeChangeStart', handleStart);
      router.events.off('routeChangeComplete', handleStop);
      router.events.off('routeChangeError', handleStop);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.events]);

  return (
    <LoaderContext.Provider value={{ customLoader }}>
      {children}
    </LoaderContext.Provider>
  );
};

export const useLoader = () => React.useContext(LoaderContext);
