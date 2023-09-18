import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { AuthRoutes } from "./auth.roures";
import { AppRoutes } from "./app.routes";
import { storageAuthTokenGet } from "../storage/storageAuthToken";
import { Center } from "native-base";
import { Loading } from "../components/Loading";

export const Routes = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        const result = await storageAuthTokenGet();
        setIsAuthenticated(!!result.token);
      } catch (error) {
        console.error("Erro ao buscar token:", error);
        setIsAuthenticated(false);
      }
    };

    checkAuthentication();
  }, []);

  if (isAuthenticated === null) {
    return (
      <Center>
        <Loading />
      </Center>
    );
  }

  return (
    <NavigationContainer>
      {!isAuthenticated ? <AuthRoutes /> : <AppRoutes />}
    </NavigationContainer>
  );
};
