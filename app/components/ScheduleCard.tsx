import {
  Input as InputNativeBase,
  IInputProps,
  Text,
  VStack,
  HStack,
  Box,
  Divider,
} from "native-base";
import { Calendar, Clock } from "phosphor-react-native";
import React from "react";

export const ScheduleCard = ({ ...rest }: IInputProps) => {
  return (
    <>
      <VStack className="block space-y-4 rounded-lg border-l-4 border-amber-300 bg-white p-4 shadow-lg shadow-gray-400">
        <Text className="font-raleway800 text-xl tracking-wide text-zinc-800">
          Próximo agendamento
        </Text>
        <VStack space={2} mb={2}>
          <HStack space={4}>
            <HStack space={1}>
              <Calendar size={20} color="#2E2E2E" />
              <Text className="text-base font-normal leading-none text-neutral-800">
                16/08/2023
              </Text>
            </HStack>
            <Divider
              bg="gray.300"
              thickness="2"
              mx="1"
              orientation="vertical"
            />
            <HStack space={1}>
              <Clock size={20} color="#2E2E2E" />
              <Text className="text-base font-normal leading-none text-neutral-800">
                Tarde
              </Text>
            </HStack>
          </HStack>

          {/* <HStack space={4}>
            <HStack space={1} alignItems={"center"} justifyContent={"center"}>
              <Calendar size={20} color="#2E2E2E" />
              <Text className="text-base font-normal leading-none text-neutral-800">
                17/08/2023
              </Text>
            </HStack>
            <Divider
              bg="gray.300"
              thickness="2"
              mx="1"
              orientation="vertical"
            />
            <HStack space={1} alignItems={"center"} justifyContent={"center"}>
              <Clock size={20} color="#2E2E2E" />
              <Text className="text-base font-normal leading-none text-neutral-800">
                Manhã
              </Text>
            </HStack>
          </HStack> */}
        </VStack>
        <Box className="flex w-36 items-center justify-center rounded-sm bg-orange-200 bg-opacity-60 px-2 py-1.5">
          <Text className="mb-1 break-words font-raleway500 text-lg text-neutral-900">
            Previdenciário
          </Text>
        </Box>
      </VStack>
    </>
  );
};
