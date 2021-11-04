import {
  createContext,
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import { toast } from 'react-toastify';

import router from 'next/router';

import {
  IUser,
  IUserChangePasswordDTO,
  IUserSignInRequestDTO,
  IUserUpdateRequestDTO,
} from 'interfaces/auth';
import { destroyCookie, parseCookies } from 'nookies';
import AuthService from 'services/AuthService';

import { ToastifyCustomMessage } from '../styles/ToastifyCustomMessage';

interface AuthContextData {
  user: IUser | undefined;
  signIn: (user: IUserSignInRequestDTO) => Promise<void>;
  signOut: () => Promise<void>;
  updateUser: (user: Omit<IUser, 'id'>) => Promise<void>;
  changePassword: (passwords: IUserChangePasswordDTO) => Promise<void>;
  isAuthenticated: boolean;
}

export const AuthContext = createContext({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<IUser | undefined>();
  const isAuthenticated = !!user;

  useEffect(() => {
    (async () => {
      const { '@rentX:token': token, '@rentX:userData': userData } =
        parseCookies();

      if (userData && token) {
        const userFormated: IUser = JSON.parse(userData);
        setUser(userFormated);
      }

      if (token && !userData) {
        try {
          const data = await AuthService.getAuthUser(token);
          setUser(data.user);
        } catch (err) {
          setUser(undefined);
          destroyCookie(undefined, '@rentX:token');
        }
      }
    })();
  }, []);

  const signIn = useCallback(async (user: IUserSignInRequestDTO) => {
    try {
      const data = await AuthService.signIn(user);
      setUser(data.user);
      toast.success(
        ToastifyCustomMessage({
          title: 'Login',
          message: 'Logado com sucesso!',
        }),
        {
          className: 'customToast_dark',
        }
      );
      router.push('/profile');
    } catch (error) {
      toast.error(ToastifyCustomMessage({ message: error.message }), {
        className: 'customToast_dark',
      });
    }
  }, []);

  const signOut = useCallback(async () => {
    await new Promise((resolve, reject) => {
      destroyCookie(undefined, '@rentX:token');
      destroyCookie(undefined, '@rentX:userId');
      destroyCookie(undefined, '@rentX:userData');
      const { '@rentX:token': token } = parseCookies();
      if (!token) {
        setUser(undefined);
        router.push('/home');
        resolve(true);
      } else {
        reject({ message: 'Cannot delete cookies!' });
      }
    });
  }, []);

  const updateUser = useCallback(async (payload: IUserUpdateRequestDTO) => {
    try {
      const data = await AuthService.updateUser(payload);
      setUser(data);
      toast.success(
        ToastifyCustomMessage({ message: 'Dados atualizados com sucesso!' }),
        {
          className: 'customToast_dark',
        }
      );
    } catch (err) {
      setUser(undefined);
      destroyCookie(undefined, '@rentX:token');
      router.push('/home');
    }
  }, []);

  const changePassword = useCallback(
    async (payload: IUserChangePasswordDTO) => {
      try {
        await AuthService.changePassword(payload);
        toast.success(
          ToastifyCustomMessage({ message: 'Senha alterada com sucesso' }),
          {
            className: 'customToast_dark',
          }
        );
      } catch (err) {
        toast.error(ToastifyCustomMessage({ message: err.message }), {
          className: 'customToast_dark',
        });
      }
    },
    []
  );

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        updateUser,
        changePassword,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
