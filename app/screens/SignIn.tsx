import { Box, Heading, Stack, Text, VStack } from "native-base";
import React, { useState } from "react";
import Logo from "../assets/rvm-logo.svg";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "../routes/auth.roures";
import { useAuth } from "../contexts/authContext";

export const SignIn = () => {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const { signIn, isUserLogged } = useAuth();
  const [isLoadding, setIsLoadding] = useState(false);

  const handleNewAccount = () => {
    navigation.navigate("signUp");
  };

  const handleSignIn = () => {
    setIsLoadding(true);
    signIn();
  };

  return (
    <VStack
      className="flex-1 items-center justify-between bg-white p-6"
      space={"12"}
    >
      <Box className="w-full items-center space-y-10 pt-4">
        <Logo width={250} />
        <Text className="max-w-xs text-center font-raleway500 text-xl">
          Acesse sua conta
        </Text>

        <Box className="w-full space-y-14">
          <VStack space={4}>
            <Text className="max-w-xs text-start font-raleway500">Email</Text>
            <Input keyboardType="email-address" autoCapitalize="none" />
            <Text className="max-w-xs text-start font-raleway500">Senha</Text>
            <Input secureTextEntry />
          </VStack>

          <Button
            title="Acessar aplicativo"
            onPress={handleSignIn}
            isLoading={isLoadding}
          />
        </Box>
      </Box>

      <Button
        title="Criar conta"
        variant={"outline"}
        onPress={handleNewAccount}
      />
    </VStack>
  );
};
