import { SignOut } from "phosphor-react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { useAuth } from "../contexts/authContext";
import { useAppDispatch } from "../reducers/store";
import { setUserNull } from "../reducers/loggedUserSlice";

export const SignOutButton = () => {
  const { signOut } = useAuth();
  const dispatch = useAppDispatch();

  const handleSignOut = () => {
    signOut();
    dispatch(setUserNull());
  };

  return (
    <TouchableOpacity className="mr-2 p-3" onPress={handleSignOut}>
      <SignOut size={32} color="#858383" />
    </TouchableOpacity>
  );
};
