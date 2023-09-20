import { NavigationContainer } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { AuthRoutes } from "./auth.roures";
import { AppRoutes } from "./app.routes";
import { Center } from "native-base";
import { Loading } from "../components/Loading";
import { useAuth } from "../contexts/authContext";
import { storageAuthTokenGet } from "../storage/storageAuthToken";

export const Routes = () => {
  const { isLoadingTokenStorageData, userToken } = useAuth();

  if (isLoadingTokenStorageData) {
    return (
      <Center>
        <Loading />
      </Center>
    );
  }

  return (
    <NavigationContainer>
      {userToken.trim() === "" ? <AuthRoutes /> : <AppRoutes />}
    </NavigationContainer>
  );
};
