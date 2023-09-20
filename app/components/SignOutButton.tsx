import { SignOut } from "phosphor-react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useAuth } from "../contexts/authContext";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../routes/app.routes";
import { AuthNavigatorRoutesProps } from "../routes/auth.roures";

export const SignOutButton = () => {
  const { signOut } = useAuth();
  //   const navigate = useNavigation<AuthNavigatorRoutesProps>();

  const handleSignOut = () => {
    signOut();
    // navigate.navigate("signIn");
  };

  return (
    <TouchableOpacity className="mr-2 p-3" onPress={handleSignOut}>
      <SignOut size={32} color="#858383" />
    </TouchableOpacity>
  );
};
