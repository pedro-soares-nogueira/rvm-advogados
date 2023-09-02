import moment from "moment";
import { VStack, HStack, Box, Stack, Checkbox, Image, Text } from "native-base";
import { IdentificationCard, X } from "phosphor-react-native";
import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Button } from "../Button";

import { Input } from "../Input";
import DateTimePeriod from "../DateTimePeriod";

export const Step02 = () => {
  return (
    <>
      <VStack className="bg-white shadow-md shadow-gray-400">
        <VStack className="h-16"></VStack>
        <HStack className="flex w-full items-center justify-between p-4">
          <Image
            source={require("../../assets/horizontal_logo.png")}
            style={{ width: 250, height: 40 }}
            alt={"Logo RVM"}
          />
        </HStack>

        <Box className="mx-4 border-t border-gray-300"></Box>

        <VStack className="space-y-5 px-4 py-6">
          <VStack className="space-y-2">
            <Text className="mb-3 font-raleway700 text-2xl text-zinc-800">
              Novo pré-agendamento
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
          </VStack>

          <HStack space={4} pt={8}>
            <Stack className="flex-col items-start justify-start gap-0.5">
              <Text className="mb-2 font-raleway700 text-xl text-zinc-800">
                Passo 01
              </Text>
              <Box className="h-3 w-44 rounded-full bg-amber-300"></Box>
            </Stack>
            <Stack className="flex-col items-start justify-start gap-0.5">
              <Text className="mb-2 font-raleway700 text-xl text-zinc-800">
                Passo 02
              </Text>
              <Box className="h-3 w-44 rounded-full bg-amber-300"></Box>
            </Stack>
          </HStack>
        </VStack>
      </VStack>
      <Box>
        <DateTimePeriod />

        <Stack mt={6} space={4} mx={4}>
          <Stack space={2}>
            <Text className="max-w-xs text-start font-raleway500 text-lg">
              Observação
            </Text>
            <Input />
          </Stack>
        </Stack>
      </Box>

      <HStack space={4} margin={"auto"} my={10}>
        <Button title="Voltar" w={"45%"} textSize={18} variant={"outline"} />
        <Button
          title="Próximo"
          w={"45%"}
          textSize={18}
          onPress={() => console.log(2)}
        />
      </HStack>
    </>
  );
};
