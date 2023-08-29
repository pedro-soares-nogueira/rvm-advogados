import { NavigationContainer } from "@react-navigation/native";
import React, { useState } from "react";
import { AuthRoutes } from "./auth.roures";
import { AppRoutes } from "./app.routes";
import { useAuth } from "../contexts/authContext";

export const Routes = () => {
  const { loadUserToken } = useAuth();

  return (
    <NavigationContainer>
      {!loadUserToken && <AuthRoutes />}
      {loadUserToken && <AppRoutes />}
    </NavigationContainer>
  );
};
