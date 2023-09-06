import { VStack, HStack, Box, Stack, Image, Text } from "native-base";
import { Warning, X, Phone } from "phosphor-react-native";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Button } from "../Button";
import { useAppDispatch, useAppSelector } from "../../reducers/store";
import { DateCard } from "../DateCard";
import { nextStep } from "../../reducers/appointmentSlice";

export const Step03 = () => {
  const { details } = useAppSelector((state) => state.fetcher);
  const dispatch = useAppDispatch();

  const { possible_dates, area_id, description } = useAppSelector(
    (store) => store.Appointment
  );
  const area = details.areas_de_atuacao.find((item) => item.id === area_id);

  const handleBackToDates = () => {
    dispatch(nextStep(2));
  };
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
          <HStack space={6} alignItems={"center"}>
            <Warning size={44} />
            <Text className="max-w-xs font-raleway700 text-2xl text-zinc-800">
              Os dados do pré-agendamento conferem?
            </Text>
          </HStack>
        </VStack>
      </VStack>
      <VStack
        space={4}
        mx={4}
        mt={10}
        p={4}
        borderWidth={1}
        borderColor={"gray.300"}
        borderRadius={4}
      >
        <Text className="max-w-xs font-raleway700 text-2xl text-zinc-800">
          John Doe,
        </Text>
        <Text className="max-w-xs font-raleway700 text-2xl text-zinc-800">
          {area ? area.name : "Você não informou uma área de atuação"}
        </Text>
        <Text className="text-start font-raleway500 text-lg">
          {Object.values(description)}
        </Text>
        <VStack space={4} mt={6}>
          {possible_dates ? (
            possible_dates.map((item, index) => (
              <DateCard key={index} completeDate={item} />
            ))
          ) : (
            <Text className="mb-1 font-raleway800 text-xl tracking-tight text-zinc-800">
              Sua lista de horários vazia
            </Text>
          )}
        </VStack>

        <Button
          title="Adicionar mais datas"
          w={"45%"}
          textSize={18}
          variant={"outline"}
          onPress={() => handleBackToDates()}
        />
        <VStack mt={6} space={4}>
          <Text className="text-start font-raleway500 text-lg">
            Confirme seu telefone, entraremos em contato para confirmação do
            atendimento e data.
          </Text>
          <Stack className="flex flex-row items-center">
            <Box className="mr-2">
              <Phone size={30} color="#2E2E2E" />
            </Box>
            <Text className="mb-2.5 text-xl font-semibold text-zinc-800">
              (99) 9999-9999
            </Text>
          </Stack>
        </VStack>
      </VStack>

      <HStack space={4} margin={"auto"} my={10}>
        <Button
          title="Voltar"
          w={"45%"}
          textSize={18}
          variant={"outline"}
          onPress={() => handleBackToDates()}
        />
        <Button
          title="Confirmar"
          w={"45%"}
          textSize={18}
          bgColor={"green.600"}
          _pressed={{
            bg: "green.200",
          }}
          onPress={() => dispatch(nextStep(3))}
        />
      </HStack>
    </>
  );
};
