import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AuthRoutes } from "./auth.roures";
import { AppRoutes } from "./app.routes";

export const Routes = () => {
  return (
    <NavigationContainer>
      <AppRoutes />
    </NavigationContainer>
  );
};
