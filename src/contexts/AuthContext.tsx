import { AxiosError } from "axios";
import router from "next/router";
import { destroyCookie, parseCookies, setCookie } from "nookies";
import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { ToastifyCustomMessage } from "../styles/ToastifyCustomMessage";

type User = {
  CNH: string;
  email: string;
  id: number;
  name: string;
};

interface SignInResponse {
  accessToken: string;
  user: User;
}

type LoginCredentialsType = {
  email: string;
  password: string;
};

interface AuthContextData {
  user: User | undefined;
  signIn: (user: LoginCredentialsType) => Promise<void>;
  signOut: () => Promise<void>;
  isAuthenticated: boolean;
}

export const AuthContext = createContext({} as AuthContextData);

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [user, setUser] = useState<User | undefined>();
  const isAuthenticated = !!user;

  useEffect(() => {
    const {
      "@rentX:token": token,
      "@rentX:userId": userId,
      "@rentX:userData": userData,
    } = parseCookies();

    if (userData && token && userId) {
      const userFormated = JSON.parse(userData);
      setUser(userFormated);
    }

    if (token && userId && !userData) {
      try {
        api
          .get(`/users/${userId}`)
          .then(({ data }) => {
            const userFormated = {
              CNH: data.CNH,
              email: data.email,
              name: data.name,
              id: data.number,
            };
            setUser(userFormated);
          })
          .catch(() => {
            setUser(undefined);
            destroyCookie(undefined, "@rentX:token");
          });
      } catch (err) {
        setUser(undefined);
        destroyCookie(undefined, "@rentX:token");
        return;
      }
    }
  }, []);

  const signIn = async (user: LoginCredentialsType) => {
    try {
      const { data } = await api.post<SignInResponse>("/login", user);
      setCookie(undefined, "@rentX:token", data.accessToken, {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      });
      setCookie(undefined, "@rentX:userId", String(data.user.id), {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      });
      const userFormated = {
        CNH: data.user.CNH,
        email: data.user.email,
        name: data.user.name,
        id: data.user.id,
      };
      setUser(userFormated);
      setCookie(undefined, "@rentX:userData", JSON.stringify(userFormated), {
        maxAge: 60 * 60 * 24 * 30, // 30 days
        path: "/",
      });
      api.defaults.headers["Authorization"] = `Bearer ${data.accessToken}`;
      toast.success(<ToastifyCustomMessage title="Login" message="Logado com sucesso!" />, {
        autoClose: 2500,
        className: "customToast_dark",
      });
      router.push("/profile");
    } catch (error) {
      let err = error as AxiosError;
      toast.error(`${err?.response?.data || err.message}`, {
        autoClose: 2500,
        className: "customToast_dark",
      });
    }
  };

  const signOut = async () => {
    new Promise((resolve, reject) => {
      destroyCookie(undefined, "@rentX:token");
      destroyCookie(undefined, "@rentX:userId");
      destroyCookie(undefined, "@rentX:userData");

      const {"@rentX:token": token} = parseCookies();
      if(!token) {
        setUser(undefined);
        router.push("/home");
        window.location.reload();
        resolve(true);
      } else {
        reject({message: "Cannot delete cookies!"});
      }
    })
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        signIn,
        signOut,
        isAuthenticated,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
