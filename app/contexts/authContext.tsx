import { ReactNode, createContext, useContext, useState } from "react";
import { api } from "../lib/axios";

export interface ISignIn {
  document: string;
  password: string;
}

type AuthContextProps = {
  signIn: ({ document, password }: ISignIn) => Promise<void>;
  token: string;
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
  const [token, setToken] = useState("");

  const signIn = async ({ document, password }: ISignIn) => {
    // console.log(`doc: ${document} | pass: ${password}`);

    try {
      const { data } = await api.post("/login", { document, password });

      if (data.success) {
        setToken(data.success.token);
      }
    } catch (error) {
      throw error;
    } finally {
    }
  };

  return (
    <AuthContext.Provider value={{ signIn, token }}>
      {children}
    </AuthContext.Provider>
  );
}
