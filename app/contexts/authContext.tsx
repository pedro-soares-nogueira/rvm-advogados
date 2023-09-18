import {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { api } from "../lib/axios";
import {
  storageAuthTokenGet,
  storageAuthTokenRemove,
  storageAuthTokenSave,
} from "../storage/storageAuthToken";

export interface ISignIn {
  document: string;
  password: string;
}

export interface IRegister {
  name: string;
  email: string;
  phone: string;
  document: string;
  password: string;
  c_password: string;
}

type AuthContextProps = {
  signIn: ({ document, password }: ISignIn) => Promise<void>;
  register: ({
    c_password,
    document,
    email,
    name,
    password,
    phone,
  }: IRegister) => Promise<void>;
  signOut: () => Promise<void>;
  loadUserToken: string;
};

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps
);

export function useAuth() {
  const authContext = useContext(AuthContext);
  return authContext;
}

type AuthContextProviderProps = {
  children: ReactNode;
};

export function AuthContextProvider({ children }: AuthContextProviderProps) {
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [loadUserToken, setLoadUserToken] = useState("");
  const [isLoadingTokenStorageData, setIsLoadingTokenStorageData] =
    useState(true);

  async function tokenHeader(token: string) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

  // console.log(loadUserToken);

  async function storageAndSaveToken(token: string) {
    try {
      setIsLoadingTokenStorageData(true);
      tokenHeader(token);

      await storageAuthTokenSave({ token });
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingTokenStorageData(false);
    }
  }

  const signIn = async ({ document, password }: ISignIn) => {
    try {
      const { data } = await api.post("/login", { document, password });

      if (data.success) {
        setLoadUserToken(data.success.token);
        storageAndSaveToken(data.success.token);
      }
    } catch (error) {
      throw error;
    } finally {
    }
  };

  const signOut = async () => {
    try {
      setIsLoadingTokenStorageData(true);
      await storageAuthTokenRemove();
      setLoadUserToken("");
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingTokenStorageData(false);
    }
  };

  const loadToken = async () => {
    try {
      setIsLoadingTokenStorageData(true);

      const { token } = await storageAuthTokenGet();

      if (token) {
        storageAndSaveToken(token);
        setLoadUserToken(token);
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingTokenStorageData(false);
    }
  };

  const register = async ({
    c_password,
    document,
    email,
    name,
    password,
    phone,
  }: IRegister) => {
    const user = {
      c_password,
      document,
      email,
      name,
      password,
      phone,
    };

    try {
      // const { data } = await api.post("/register", user);
      // console.log(user);
    } catch (error) {
      throw error;
    } finally {
    }
  };

  useEffect(() => {
    loadToken();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        signIn,
        signOut,
        register,
        loadUserToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
