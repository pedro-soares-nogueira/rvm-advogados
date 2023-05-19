import { Box, Heading, Stack, Text, VStack } from "native-base";
import React from "react";
import Logo from "../assets/rvm-logo.svg";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useNavigation } from "@react-navigation/native";

export const SignUp = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <VStack
      className="flex-1 items-center justify-between bg-yellow-50 p-6"
      space={"12"}
    >
      <Box className="w-full items-center space-y-10 pt-4">
        <Logo width={250} />
        <Text className="max-w-xs text-center font-raleway500 text-xl">
          Crie uma conta
        </Text>

        <Box className="w-full space-y-14">
          <VStack space={4}>
            <Input placeholder="Name" />
            <Input
              placeholder="Email"
              keyboardType="email-address"
              autoCapitalize="none"
            />
            <Input placeholder="Senha" secureTextEntry />
            <Input placeholder="Confirmar senha" secureTextEntry />
          </VStack>

          <Button title="Criar conta" />
        </Box>
      </Box>

      <Button
        title="Já tenho uma conta"
        variant={"outline"}
        onPress={handleGoBack}
      />
    </VStack>
  );
};
