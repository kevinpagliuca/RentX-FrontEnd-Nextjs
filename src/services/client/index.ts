import { GetServerSidePropsContext } from 'next';

import axios from 'axios';
import { parseCookies } from 'nookies';

export function setupAPI(ctx?: GetServerSidePropsContext) {
  const { '@rentX:token': token } = parseCookies(ctx);

  const api = axios.create({
    baseURL:  process.env.NEXT_PUBLIC_URL_PORT_PROD   || 'http://localhost:3333',
  });

  if (token) api.defaults.headers.Authorization = `Bearer ${token}`;
  return api;
}

export const api = setupAPI();

export const setAuthentication = (token: string) => {
  api.defaults.headers.Authorization = `Bearer ${token}`;
};

export const removeAuthentication = () => {
  api.defaults.headers.Authorization = '';
};
