import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { AuthRoutes } from "./auth.roures";

export const Routes = () => {
  return (
    <NavigationContainer>
      <AuthRoutes />
    </NavigationContainer>
  );
};
