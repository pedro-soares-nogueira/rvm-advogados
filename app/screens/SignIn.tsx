import { Box, Heading, Stack, Text, VStack, useToast } from "native-base";
import React, { useState } from "react";
import Logo from "../assets/rvm-logo.svg";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "../routes/auth.roures";
import { ISignIn, useAuth } from "../contexts/authContext";
import { Controller, useForm } from "react-hook-form";
import { AppError } from "../utils/AppError";

export const SignIn = () => {
  const navigation = useNavigation<AuthNavigatorRoutesProps>();
  const { signIn } = useAuth();
  const [isLoading, setIsLoading] = useState(false);
  const toast = useToast();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ISignIn>();

  const handleNewAccount = () => {
    navigation.navigate("signUp");
  };

  const handleSignIn = async (data: ISignIn) => {
    try {
      setIsLoading(true);

      await signIn(data);
    } catch (error) {
      console.log(error);

      toast.show({
        title: "Verifique as credenciais ou entre em contato!.",
        placement: "top",
        bgColor: "red.500",
        size: "20",
        style: {
          marginTop: 30,
        },
      });

      setIsLoading(false);
    }
  };

  return (
    <VStack className="flex-1 items-center justify-between bg-white p-6">
      <Box className="w-full items-center space-y-10 pt-12">
        <Logo width={250} />
        <Text className="max-w-xs text-center font-raleway500 text-xl">
          Acesse sua conta
        </Text>

        <Box className="w-full space-y-14">
          <VStack space={4}>
            <Text className="max-w-xs text-start font-raleway500">
              Documento
            </Text>

            <Controller
              control={control}
              name="document"
              rules={{ required: "Informe o documento" }}
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="Documento"
                  keyboardType="numeric"
                  autoCapitalize="none"
                  onChangeText={onChange}
                  errorMessage={errors.document?.message}
                />
              )}
            />

            <Text className="max-w-xs text-start font-raleway500">Senha</Text>
            <Controller
              control={control}
              name="password"
              rules={{ required: "Informe a senha" }}
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="Senha"
                  secureTextEntry
                  onChangeText={onChange}
                  autoCapitalize="none"
                  errorMessage={errors.password?.message}
                />
              )}
            />
          </VStack>

          <Button
            title="Acessar"
            onPress={handleSubmit(handleSignIn)}
            isLoading={isLoading}
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
