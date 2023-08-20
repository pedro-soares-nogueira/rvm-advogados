import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { AuthRoutes } from "./auth.roures";
import { AppRoutes } from "./app.routes";
import { useAuth } from "../contexts/authContext";

export const Routes = () => {
  const { isUserLogged } = useAuth();

  return (
    <NavigationContainer>
      {!isUserLogged && <AuthRoutes />}
      {isUserLogged && <AppRoutes />}
    </NavigationContainer>
  );
};
