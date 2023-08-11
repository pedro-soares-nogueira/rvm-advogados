import {
  Box,
  HStack,
  Image,
  ScrollView,
  Stack,
  Text,
  VStack,
} from "native-base";
import {
  IdentificationCard,
  Phone,
  Plus,
  WhatsappLogo,
} from "phosphor-react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { Input } from "../components/Input";

export const Profile = () => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} background={"white"}>
        <VStack className="bg-white shadow-md shadow-gray-400">
          <VStack className="h-16"></VStack>
          <HStack className="flex w-full items-center justify-between p-4">
            <Image
              source={require("../assets/horizontal_logo.png")}
              style={{ width: 250, height: 40 }}
              alt={"Logo RVM"}
            />
            {/* <Main_logo width={200} /> */}
          </HStack>

          <Box className="mx-4 border-t border-gray-300"></Box>

          <VStack className="space-y-5 px-4 py-6">
            <VStack className="space-y-2">
              <Text className="mb-3 font-raleway700 text-2xl text-zinc-800">
                Seus dados
              </Text>
              <Text className="font-raleway700 text-3xl text-zinc-800">
                Jhon Doe
              </Text>
              <Stack className="flex flex-row items-center">
                <Box className="mr-2">
                  <IdentificationCard size={30} color="#2E2E2E" />
                </Box>
                <Text className="mb-2.5 font-raleway600 text-xl text-zinc-800">
                  999-999-999-99
                </Text>
              </Stack>

              <Stack className="flex flex-row items-center">
                <Box className="mr-2">
                  <Phone size={30} color="#2E2E2E" />
                </Box>
                <Text className="mb-2.5 font-raleway600 text-xl text-zinc-800">
                  (99) 9999-9999
                </Text>
              </Stack>

              <Text className="my-4 mr-2 font-raleway500 text-lg text-zinc-800">
                Esses são seus dados. Confirme o telefone pois entraremos em
                contato para confirmar seus pré-agendamentos.
              </Text>
              <Text className="mb-4 mr-2 font-raleway500 text-lg text-zinc-800">
                Para alteração de dados, entre em contato com a gente.
              </Text>

              <TouchableOpacity className="mb-4 flex w-96 flex-row items-center justify-between gap-2 rounded-md border-2 border-[#78620acb] px-3 pb-3 pt-1">
                <Text className="mb-1 font-raleway600 text-lg text-[#78620A]">
                  Solicitar alteração de dados cadastrais
                </Text>
                <WhatsappLogo size={20} color="#78620A" />
              </TouchableOpacity>

              <TouchableOpacity className="flex w-64 flex-row items-center justify-center gap-2 rounded-md bg-amber-300 px-3 pb-3 pt-1">
                <Text className="mb-1 font-raleway600 text-lg text-zinc-800">
                  Novo pré-agendamento
                </Text>
                <Plus size={20} color="#2E2E2E" />
              </TouchableOpacity>
            </VStack>
          </VStack>
        </VStack>
        <VStack space={4} mx={4} py={16}>
          <Text className="max-w-xl text-start font-raleway500 text-xl">
            Alterar senha
          </Text>
          <Input secureTextEntry />
          <Text className="max-w-xl text-start font-raleway500 text-xl">
            Confirmar alteração de senha
          </Text>
          <Input secureTextEntry />
          <Stack mx={2} mt={6} alignItems={"flex-end"}>
            <TouchableOpacity
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
    </ScrollView>
  );
};
