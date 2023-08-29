import { ReactNode, createContext, useContext, useState } from "react";
import { api } from "../lib/axios";

export interface ISignIn {
  document: string;
  password: string;
}

type AuthContextProps = {
  isUserLogged: boolean;
  signIn: ({ document, password }: ISignIn) => Promise<void>;
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
    const { data } = await api.post("/login", { document, password });
    setToken(data.success.token);

    console.log(data.success.token);
  };

  return (
    <AuthContext.Provider value={{ isUserLogged, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
