import { Box, Center, Flex, HStack, Image, Text, VStack } from "native-base";
import React from "react";
import Main_logo from "../assets/HLogo.svg";
import { ArrowRight, CalendarPlus, Plus } from "phosphor-react-native";
import { ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { ScheduleCard } from "../components/ScheduleCard";
import PracticeArea from "../components/PracticeArea";
import { Button } from "../components/Button";
import InstagramEmbed from "../components/InstagramEmbedComp";
import Team from "../components/Team";

const styles = StyleSheet.create({});

export const Home = () => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} background={"white"}>
        <VStack className="bg-white shadow-md shadow-gray-400">
          <VStack className="h-16"></VStack>
          <HStack className="items flex w-full justify-between p-4">
            <Main_logo width={200} />
          </HStack>

          <Box className="mx-4 border-t border-gray-300"></Box>

          <VStack className="space-y-5 px-4 py-6">
            <VStack className="space-y-2">
              <Text className="font-raleway700 text-2xl text-zinc-800">
                Olá, Pedro
              </Text>
              <Text className="font-raleway700 text-xl text-zinc-800">
                25 de julho, 2023
              </Text>
              <TouchableOpacity className="flex flex-row items-center">
                <Text className="my-4 mr-2 font-raleway600 text-xl text-zinc-800">
                  Veja todos seus agendamentos aqui
                </Text>
                <Box className="my-4">
                  <ArrowRight size={20} color="#2E2E2E" />
                </Box>
              </TouchableOpacity>
            </VStack>

            <TouchableOpacity className="flex w-64 flex-row items-center justify-center gap-2 rounded-md bg-amber-300 px-3 pb-3 pt-1">
              <Text className="mb-1 font-raleway600 text-lg text-zinc-800">
                Novo pré-agendamento
              </Text>
              <Plus size={20} color="#2E2E2E" />
            </TouchableOpacity>
          </VStack>
        </VStack>

        <VStack className="mx-4 my-6" space={8}>
          <ScheduleCard />

          <TouchableOpacity className="flex flex-row items-center justify-center space-x-3 rounded-md bg-rose-300 bg-opacity-40 p-4">
            <Text className="mb-1 font-raleway600 text-lg tracking-tight text-zinc-800">
              Veja os endereços dos nossos escritórios
            </Text>
            <ArrowRight size={20} color="#2E2E2E" />
          </TouchableOpacity>

          <PracticeArea />

          <InstagramEmbed />

          <Team />
        </VStack>
      </VStack>
    </ScrollView>
  );
};
