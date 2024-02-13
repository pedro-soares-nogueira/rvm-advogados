import {
  Box,
  Button as ReactNativeButton,
  Text,
  VStack,
  useToast,
} from "native-base";
import React, { useState } from "react";
import Logo from "../assets/rvm-logo.svg";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useNavigation } from "@react-navigation/native";
import { AuthNavigatorRoutesProps } from "../routes/auth.roures";
import { ISignIn, useAuth } from "../contexts/authContext";
import { Controller, useForm } from "react-hook-form";
import { Eye, EyeSlash } from "phosphor-react-native";
import md5 from "md5";

export const SignIn = () => {
  const [show_passwords, setShow_passwords] = useState(false);

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

      const hashedPassword = md5(data.password);

      const userToLogin = { document: data.document, password: hashedPassword };

      await signIn(userToLogin);

      // console.log(hashedPassword);

      setIsLoading(false);
    } catch (error) {
      console.error(error);

      toast.show({
        title: "Verifique o documento ou entre em contato!",
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

  const handleShowPassword = () => {
    setShow_passwords(!show_passwords);
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
                  keyboardType="default"
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
                  onChangeText={onChange}
                  autoCapitalize="none"
                  errorMessage={errors.password?.message}
                  type={show_passwords ? "text" : "password"}
                  InputRightElement={
                    <ReactNativeButton
                      backgroundColor={"yellow.100"}
                      size="xs"
                      rounded="none"
                      w="1/6"
                      h="full"
                      onPress={handleShowPassword}
                    >
                      {show_passwords ? (
                        <Eye size={26} />
                      ) : (
                        <EyeSlash size={26} />
                      )}
                    </ReactNativeButton>
                  }
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
