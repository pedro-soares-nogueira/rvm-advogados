import {
  Box,
  Heading,
  ScrollView,
  Stack,
  Text,
  VStack,
  useToast,
} from "native-base";
import React, { useState } from "react";
import Logo from "../assets/rvm-logo.svg";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { useNavigation } from "@react-navigation/native";
import { Controller, useForm } from "react-hook-form";
import { IRegister, ISignIn, useAuth } from "../contexts/authContext";

export const SignUp = () => {
  const navigation = useNavigation();
  const toast = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IRegister>();
  const { register, signIn } = useAuth();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleRegister = async (data: IRegister) => {
    try {
      setIsLoading(true);

      await register(data);

      const userToSigin: ISignIn = {
        document: data.document,
        password: data.password,
      };
      await signIn(userToSigin);

      setIsLoading(false);
    } catch (error) {
      console.log(error);

      toast.show({
        title: "Verifique as credenciais ou entre em contato!",
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
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack
        className="flex-1 items-center justify-between bg-white p-6"
        space={"12"}
      >
        <Box className="w-full items-center space-y-10 pt-4">
          <Logo width={250} />
          <Text className="max-w-xs text-center font-raleway500 text-xl">
            Crie uma conta
          </Text>

          <Box className="w-full space-y-14">
            <VStack space={4}>
              <Text className="max-w-xs text-start font-raleway500">Nome</Text>
              <Controller
                control={control}
                name="name"
                rules={{ required: "Informe o Nome" }}
                render={({ field: { onChange } }) => (
                  <Input
                    placeholder="Nome"
                    autoCapitalize="none"
                    onChangeText={onChange}
                    errorMessage={errors.name?.message}
                  />
                )}
              />
              <Text className="max-w-xs text-start font-raleway500">
                Telefone
              </Text>
              <Controller
                control={control}
                name="phone"
                rules={{ required: "Informe o Telefone" }}
                render={({ field: { onChange } }) => (
                  <Input
                    placeholder="Telefone"
                    autoCapitalize="none"
                    keyboardType="phone-pad"
                    onChangeText={onChange}
                    errorMessage={errors.phone?.message}
                  />
                )}
              />
              <Text className="max-w-xs text-start font-raleway500">
                Documento
              </Text>
              <Controller
                control={control}
                name="document"
                rules={{ required: "Informe o Documento" }}
                render={({ field: { onChange } }) => (
                  <Input
                    placeholder="Documento"
                    autoCapitalize="none"
                    keyboardType="phone-pad"
                    onChangeText={onChange}
                    errorMessage={errors.document?.message}
                  />
                )}
              />
              <Text className="max-w-xs text-start font-raleway500">Email</Text>
              <Controller
                control={control}
                name="email"
                rules={{ required: "Informe o Email" }}
                render={({ field: { onChange } }) => (
                  <Input
                    placeholder="Email"
                    autoCapitalize="none"
                    keyboardType="email-address"
                    onChangeText={onChange}
                    errorMessage={errors.email?.message}
                  />
                )}
              />
              <Text className="max-w-xs text-start font-raleway500">Senha</Text>
              <Controller
                control={control}
                name="password"
                rules={{ required: "Informe a Senha" }}
                render={({ field: { onChange } }) => (
                  <Input
                    placeholder="Senha"
                    autoCapitalize="none"
                    secureTextEntry
                    onChangeText={onChange}
                    errorMessage={errors.password?.message}
                  />
                )}
              />
              <Text className="max-w-xs text-start font-raleway500">
                Confirme a senha
              </Text>
              <Controller
                control={control}
                name="c_password"
                rules={{ required: "Informe a confirmação de senha" }}
                render={({ field: { onChange } }) => (
                  <Input
                    placeholder="Confirme a senha"
                    autoCapitalize="none"
                    secureTextEntry
                    onChangeText={onChange}
                    errorMessage={errors.c_password?.message}
                  />
                )}
              />
            </VStack>

            <Button
              title="Criar conta"
              onPress={handleSubmit(handleRegister)}
              isLoading={isLoading}
            />
          </Box>
        </Box>

        <Button
          title="Já tenho uma conta"
          variant={"outline"}
          onPress={handleGoBack}
        />
      </VStack>
    </ScrollView>
  );
};
