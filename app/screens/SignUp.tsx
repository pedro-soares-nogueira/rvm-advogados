import {
  Box,
  Button as ReactNativeButton,
  Heading,
  Icon,
  Pressable,
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
import { ISignIn, useAuth } from "../contexts/authContext";
import { Eye, EyeSlash } from "phosphor-react-native";
import md5 from "md5";

export interface IRegister {
  name: string;
  email: string;
  phone: string;
  document: string;
  password: string;
  c_password: string;
}

export const SignUp = () => {
  const [show_passwords, setShow_passwords] = useState(false);

  const navigation = useNavigation();
  const toast = useToast();

  const [isLoading, setIsLoading] = useState(false);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<IRegister>();
  const { register } = useAuth();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const handleRegister = async (data: IRegister) => {
    try {
      setIsLoading(true);

      if (data.password === data.c_password) {
        const hashedPassword = md5(data.password);

        const userToRegister = {
          CpfCnpj: data.document,
          Email: data.email,
          Nome: data.name,
          Telefone: data.phone,
          Senha: hashedPassword,
        };

        await register(userToRegister);

        setIsLoading(false);
        navigation.goBack();
      } else {
        toast.show({
          title: "As senhas precisam ser iguais!",
          placement: "top",
          bgColor: "red.500",
          size: "20",
          style: {
            marginTop: 30,
          },
        });

        setIsLoading(false);
      }
    } catch (error) {
      console.error(error);
      alert(error.message);

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

  const handleShowPassword = () => {
    setShow_passwords(!show_passwords);
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack
        className="flex-1 items-center justify-between bg-white p-6"
        space={"6"}
      >
        <Box className="w-full items-center space-y-10 pt-4">
          <Logo width={250} />
          <Text className="max-w-xs text-center font-raleway500 text-xl">
            Crie uma conta
          </Text>

          <Box className="w-full space-y-14">
            <VStack space={4}>
              <Stack space={2}>
                <Text className="max-w-xs text-start font-raleway500">
                  CPF ou CNPJ{" "}
                </Text>
                <Text className="text-xs">Você usará para acessar a conta</Text>
              </Stack>
              <Controller
                control={control}
                name="document"
                rules={{ required: "Informe o CPF/CNPJ" }}
                render={({ field: { onChange } }) => (
                  <Input
                    placeholder="CPF/CNPJ"
                    autoCapitalize="none"
                    keyboardType="phone-pad"
                    onChangeText={onChange}
                    errorMessage={errors.document?.message}
                  />
                )}
              />
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
              <Stack className="my-6 border-t border-gray-300"></Stack>

              <Text className="max-w-xs text-start font-raleway500">Senha</Text>
              <Controller
                control={control}
                name="password"
                rules={{ required: "Informe a Senha" }}
                render={({ field: { onChange } }) => (
                  <Input
                    placeholder="Senha"
                    autoCapitalize="none"
                    onChangeText={onChange}
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
                    onChangeText={onChange}
                    errorMessage={errors.c_password?.message}
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
