import { ReactNode, createContext, useContext, useState } from "react";

type AuthContextProps = {
  isUserLogged: boolean;
  signIn: () => Promise<void>;
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

  const signIn = async () => {
    setIsUserLogged(true);
  };

  return (
    <AuthContext.Provider value={{ isUserLogged, signIn }}>
      {children}
    </AuthContext.Provider>
  );
}
