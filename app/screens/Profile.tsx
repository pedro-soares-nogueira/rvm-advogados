import {
  Box,
  Center,
  Button as ReactNativeButton,
  HStack,
  Image,
  ScrollView,
  Stack,
  Text,
  VStack,
} from "native-base";
import {
  Eye,
  EyeSlash,
  IdentificationCard,
  Phone,
  Plus,
  WhatsappLogo,
} from "phosphor-react-native";
import React, { useEffect, useState } from "react";
import { TouchableOpacity } from "react-native";
import { Input } from "../components/Input";
import { useAppSelector } from "../reducers/store";
import { Button } from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../routes/app.routes";
import { useAuth } from "../contexts/authContext";
import { apiUranus } from "../lib/axios";
import { Controller, useForm } from "react-hook-form";
import md5 from "md5";

function aplicarMascaraCPFouCNPJ(numero) {
  const numeros = numero.replace(/\D/g, "");

  if (numeros.length === 11) {
    return numeros.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
  } else if (numeros.length === 14) {
    return numeros.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
      "$1.$2.$3/$4-$5"
    );
  } else {
    return numero;
  }
}

export const Profile = () => {
  const [show_passwords, setShow_passwords] = useState(false);
  // const { user } = useAppSelector((state) => state.user);
  const { userToken } = useAuth();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handleHome = () => {
    navigation.navigate("home");
  };

  const handleChangePassword = async (pass_data: any) => {
    if (pass_data.password === pass_data.c_password) {
      const hashedPassword = md5(pass_data.password);

      const userToChange = {
        CpfCnpj: aplicarMascaraCPFouCNPJ(userToken),
        Senha: hashedPassword,
      };

      const data = await apiUranus.put(
        "/usuario?token=7bd15381-52b3-47b0-bdce-7ead4be7654a",
        userToChange
      );

      console.log(data.data);
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
      {userToken !== null ? (
        <VStack flex={1} background={"white"}>
          <VStack className="bg-white shadow-md shadow-gray-400">
            <VStack className="h-16"></VStack>
            <HStack className="flex w-full items-center justify-between p-4">
              <TouchableOpacity onPress={() => handleHome()}>
                <Image
                  source={require("../assets/horizontal_logo.png")}
                  style={{ width: 250, height: 40 }}
                  alt={"Logo RVM"}
                />
                {/* <Main_logo width={200} /> */}
              </TouchableOpacity>
            </HStack>

            <VStack className="mx-4 my-6 space-y-2">
              <Text className="mb-3 font-raleway700 text-2xl text-zinc-800">
                Seu Perfil
              </Text>
              <Stack className="flex flex-row items-center">
                <Box className="mr-2">
                  <IdentificationCard size={30} color="#2E2E2E" />
                </Box>
                <Text className="mb-2.5 font-raleway600 text-xl text-zinc-800">
                  {userToken}
                </Text>
              </Stack>

              <Text className="mb-4 mr-2 font-raleway500 text-lg text-zinc-800">
                Aqui você pode alterar sua senha
              </Text>
            </VStack>
          </VStack>
          <VStack space={4} mx={4} py={8}>
            <Text className="max-w-xl text-start font-raleway500 text-xl">
              Alterar senha
            </Text>
            <Controller
              control={control}
              name="password"
              rules={{ required: "Informe a senha" }}
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="Senha"
                  onChangeText={onChange}
                  autoCapitalize="none"
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
            <Text className="max-w-xl text-start font-raleway500 text-xl">
              Confirmar alteração de senha
            </Text>
            <Controller
              control={control}
              name="c_password"
              rules={{ required: "Informe a senha" }}
              render={({ field: { onChange } }) => (
                <Input
                  placeholder="Senha"
                  onChangeText={onChange}
                  autoCapitalize="none"
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
            <Stack mx={2} mt={6} alignItems={"flex-end"}>
              <TouchableOpacity
                onPress={handleSubmit(handleChangePassword)}
                className="flex w-64 flex-row items-center justify-center 
                            gap-2 rounded-md bg-amber-300 px-3 pb-3 pt-1"
              >
                <Text className="mb-1 font-raleway600 text-lg text-zinc-800">
                  Salvar
                </Text>
              </TouchableOpacity>
            </Stack>
          </VStack>
        </VStack>
      ) : (
        <Center flex={1} bg={"white"} px={16}>
          <Text fontSize={"2xl"} mb={4} fontWeight={"bold"}>
            Você parece não estar logado
          </Text>
          <Text fontSize={"xl"} mb={4} textAlign={"center"}>
            Para realizar um pré-agendamento você precisa estar logado. Entre ou
            faça agora seu cadastro
          </Text>
          <Button
            fontSize={"md"}
            title="Entrar"
            onPress={() => {
              navigation.navigate("signIn");
            }}
          />
        </Center>
      )}
    </ScrollView>
  );
};
