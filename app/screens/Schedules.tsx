import {
  Box,
  Center,
  Divider,
  HStack,
  Image,
  Input,
  ScrollView,
  Stack,
  Text,
  VStack,
} from "native-base";
import {
  IdentificationCard,
  Phone,
  WhatsappLogo,
  Plus,
  ArrowRight,
} from "phosphor-react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { ScheduleCard } from "../components/ScheduleCard";

export const Schedules = () => {
  const [ableTo, setAbleTo] = useState(true);

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
                Agendamentos
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

              <Text className="mb-4 mr-2 font-raleway500 text-lg text-zinc-800">
                Aqui estão seus agendamentos mais recentes{" "}
              </Text>

              <TouchableOpacity className="flex w-64 flex-row items-center justify-center gap-2 rounded-md bg-amber-300 px-3 pb-3 pt-1">
                <Text className="mb-1 font-raleway600 text-lg text-zinc-800">
                  Novo pré-agendamento
                </Text>
                <Plus size={20} color="#2E2E2E" />
              </TouchableOpacity>
            </VStack>
          </VStack>
        </VStack>
        <VStack space={4} mx={4} py={8}>
          <TouchableOpacity
            onPress={() => console.log("Endereços")}
            className="flex flex-row items-center justify-center space-x-3 rounded-md bg-rose-300 bg-opacity-40 p-4"
          >
            <Text className="mb-1 font-raleway600 text-lg tracking-tight text-zinc-800">
              Veja os endereços dos nossos escritórios
            </Text>
            <ArrowRight size={20} color="#2E2E2E" />
          </TouchableOpacity>

          <Divider my={4} />
          {ableTo ? (
            <VStack space={6}>
              <ScheduleCard />
              <ScheduleCard />
              <ScheduleCard />
            </VStack>
          ) : (
            <Center>
              <Text
                mb={8}
                className="mb-4 mr-2 block text-center font-raleway500 text-lg text-zinc-800"
              >
                Você ainda não tem acesso aos pré agendamentos anteriores. Entre
                em contato com a gente!
              </Text>
              <TouchableOpacity className="mt-4 flex w-96 flex-row items-center justify-between gap-2 rounded-md border-2 border-[#78620acb] px-3 pb-3 pt-1">
                <Text className="mb-1 font-raleway600 text-lg text-[#78620A]">
                  Solicitar alteração de dados cadastrais
                </Text>
                <WhatsappLogo size={20} color="#78620A" />
              </TouchableOpacity>
            </Center>
          )}
        </VStack>
      </VStack>
    </ScrollView>
  );
};
