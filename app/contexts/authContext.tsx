import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { api, apiUranus } from "../lib/axios";
import {
  storageAuthTokenGet,
  storageAuthTokenRemove,
  storageAuthTokenSave,
} from "../storage/storageAuthToken";
import { AuthNavigatorRoutesProps } from "../routes/auth.roures";
import { useNavigation } from "@react-navigation/native";
import { useAppDispatch } from "../reducers/store";
import { loadUser } from "../reducers/loggedUserSlice";

export interface ISignIn {
  document: string;
  password: string;
}

export interface IRegister {
  CpfCnpj: string;
  Email: string;
  Nome: string;
  Telefone: string;
  Senha: string;
}

type AuthContextProps = {
  signIn: ({ document, password }: ISignIn) => Promise<void>;
  register: ({
    CpfCnpj,
    Email,
    Nome,
    Telefone,
    Senha,
  }: IRegister) => Promise<void>;
  signOut: () => Promise<void>;
  userToken: string;
  isLoadingTokenStorageData: boolean;
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
  const dispatch = useAppDispatch();
  const [isUserLogged, setIsUserLogged] = useState(false);
  const [userToken, setUserToken] = useState("");

  // console.log(typeof userToken);

  const [isLoadingTokenStorageData, setIsLoadingTokenStorageData] =
    useState(true);

  async function tokenHeader(token: string) {
    api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }

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
      // console.log("Loging");
      // const { data } = await api.post("/login", { document, password });

      const { data } = await apiUranus.post(
        "/usuario?token=7bd15381-52b3-47b0-bdce-7ead4be7654a",
        { Login: document, Senha: password }
      );

      console.log(data);

      if (data.Status === "Sucesso") {
        storageAndSaveToken(document);
        setUserToken(document);
        // dispatch(loadUser());
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
      setUserToken("");
      // console.log("removed");
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
        setUserToken(token);
      }
    } catch (error) {
      throw error;
    } finally {
      setIsLoadingTokenStorageData(false);
    }
  };

  const register = async ({
    CpfCnpj,
    Email,
    Nome,
    Telefone,
    Senha,
  }: IRegister) => {
    const userToRegister = {
      CpfCnpj,
      Email,
      Nome,
      Telefone,
      Senha,
    };

    const userToRegisterAsUser = {
      Login: CpfCnpj,
      Senha,
    };

    try {
      const data = await apiUranus.post(
        "/precadastro?token=7bd15381-52b3-47b0-bdce-7ead4be7654a",
        userToRegister
      );

      /* const { data } = await apiUranus.post(
        "/usuario?token=7bd15381-52b3-47b0-bdce-7ead4be7654a",
        userToRegisterAsUser
      ); */

      console.log("authContext " + data.data.Status);

      if (data.data.Status !== "Sucesso") {
        throw new Error("Credenciais inválidas");
      }
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
        userToken,
        isLoadingTokenStorageData,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
