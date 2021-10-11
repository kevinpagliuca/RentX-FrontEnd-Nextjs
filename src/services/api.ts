import axios from 'axios';
import { GetServerSidePropsContext } from 'next';
import { parseCookies } from 'nookies';

export function setupAPI(ctx?: GetServerSidePropsContext) {
  const { '@rentX:token': token } = parseCookies(ctx);

  const api = axios.create({
    baseURL: 'http://localhost:3333/',
    headers: {
      Authorization: `Bearer ${token}` || '',
    },
  });

  return api;
}

export const api = setupAPI();
