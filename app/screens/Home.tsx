import { Box, Center, HStack, Image, Text, VStack } from "native-base";
import React from "react";
import Main_logo from "../assets/HLogo.svg";
import { ArrowRight, CalendarPlus, Plus } from "phosphor-react-native";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({});

export const Home = () => {
  return (
    <VStack flex={1} background={"white"}>
      <VStack className="border-b border-gray-300 bg-white">
        <VStack className="h-16"></VStack>
        <HStack className="items flex w-full justify-between p-4">
          <Main_logo width={200} />
        </HStack>

        <Box className="mx-4 border-t border-gray-300"></Box>

        <VStack className="space-y-5 px-4 py-6">
          <VStack className="space-y-2">
            <Text className="text-lg font-bold text-zinc-800">Olá, Pedro</Text>
            <Text className="text-lg font-bold text-zinc-800">
              25 de julho, 2023
            </Text>
            <HStack className="flex items-center">
              <Text className="mr-2 text-zinc-800">
                Veja todos seus agendamentos aqui
              </Text>
              <ArrowRight size={20} color="#2E2E2E" />
            </HStack>
          </VStack>

          <HStack className="flex w-64 items-center justify-center gap-2 rounded-md bg-amber-300 px-3 pb-3 pt-1">
            <Text className="text-zinc-800">Novo pré-agendamentos</Text>
            <Plus size={20} color="#2E2E2E" />
          </HStack>
        </VStack>
      </VStack>
    </VStack>
  );
};
