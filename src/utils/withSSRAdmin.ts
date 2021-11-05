import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';

import { IUser } from 'interfaces/auth';
import { destroyCookie, parseCookies } from 'nookies';

const nextRedirect = (ctx: GetServerSidePropsContext) => {
  destroyCookie(ctx, '@rentX:token');
  destroyCookie(ctx, '@rentX:userData');
  return {
    redirect: {
      destination: '/',
      permanent: false,
    },
  };
};

export function withSSRAdmin<P>(fn: GetServerSideProps<P>): GetServerSideProps {
  return async (
    ctx: GetServerSidePropsContext
  ): Promise<GetServerSidePropsResult<P>> => {
    const { '@rentX:token': token, '@rentX:userData': userData } =
      parseCookies(ctx);

    if (!token && !userData) return nextRedirect(ctx);
    const { is_admin }: IUser = JSON.parse(userData);
    if (!is_admin) return nextRedirect(ctx);

    try {
      return await fn(ctx);
    } catch (err) {
      return nextRedirect(ctx);
    }
  };
}
