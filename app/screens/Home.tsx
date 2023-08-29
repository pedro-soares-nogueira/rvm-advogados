import {
  Box,
  Center,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
  View,
} from "native-base";
import React, { useEffect } from "react";
import { ArrowRight, Plus } from "phosphor-react-native";
import { ScrollView, TouchableOpacity } from "react-native";
import { ScheduleCard } from "../components/ScheduleCard";
import SiteBanner from "../components/SiteBanner";
import PracticeAreaModal from "../components/PracticeAreaModal";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../routes/app.routes";
import NewsModal from "../components/NewsModal";
import EmbeddedWebView from "../components/EmbeddedWebView";
import { Loading } from "../components/Loading";
import { useAppDispatch, useAppSelector } from "../reducers/store";
import { loadDetails } from "../reducers/fetchSlice";
import Team from "../components/Team";
import { OurTeam } from "../components/OurTeam";

export const Home = () => {
  const dispatch = useAppDispatch();
  const { details, isLoading } = useAppSelector((state) => state.fetcher);
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handleNewSchedule = () => {
    navigation.navigate("newSchedule");
  };

  const handleSchedules = () => {
    navigation.navigate("schedules");
  };

  const handleAdreess = () => {
    navigation.navigate("adreess");
  };

  useEffect(() => {
    dispatch(loadDetails());
  }, []);

  console.log("renderizou");

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} background={"white"} mb={40}>
        <VStack className="bg-white shadow-md shadow-gray-400">
          <VStack className="h-16"></VStack>
          <HStack className="flex w-full items-center justify-between p-4">
            <Image
              source={require("../assets/horizontal_logo.png")}
              style={{ width: 250, height: 40 }}
              alt={"Logo RVM"}
            />
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
              <TouchableOpacity
                onPress={() => handleSchedules()}
                className="flex flex-row items-center"
              >
                <Text className="my-4 mr-2 font-raleway600 text-xl text-zinc-800">
                  Veja todos seus agendamentos aqui
                </Text>
                <Box className="my-4">
                  <ArrowRight size={20} color="#2E2E2E" />
                </Box>
              </TouchableOpacity>
            </VStack>

            <TouchableOpacity
              onPress={() => handleNewSchedule()}
              className="flex w-64 flex-row items-center justify-center gap-2 rounded-md bg-amber-300 px-3 pb-3 pt-1"
            >
              <Text className="mb-1 font-raleway600 text-lg text-zinc-800">
                Novo pré-agendamento
              </Text>
              <Plus size={20} color="#2E2E2E" />
            </TouchableOpacity>
          </VStack>
        </VStack>

        <Stack className="mx-4 mt-6" space={8}>
          <TouchableOpacity
            onPress={() => handleAdreess()}
            className="flex flex-row items-center justify-center space-x-3 rounded-md bg-rose-300 bg-opacity-40 p-4"
          >
            <Text className="mb-1 font-raleway600 text-lg tracking-tight text-zinc-800">
              Veja os endereços dos nossos escritórios
            </Text>
            <ArrowRight size={20} color="#2E2E2E" />
          </TouchableOpacity>
        </Stack>

        <VStack className="mx-4 mt-6" space={8}>
          <ScheduleCard />
          <VStack>
            <VStack className="space-y-3 border-b-2 border-amber-300 pb-4">
              <VStack className="inline-flex items-start justify-start gap-24">
                <Text className="font-raleway800 text-2xl text-black">
                  Áreas de atuação
                </Text>
              </VStack>
              <Text className="font-raleway500 text-lg text-zinc-800">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam
              </Text>
            </VStack>

            <View className="mt-6 flex flex-row flex-wrap justify-between p-4">
              {isLoading ? (
                <Center w={"100%"}>
                  <Loading />
                </Center>
              ) : (
                details.areas_de_atuacao.map((item) => (
                  <PracticeAreaModal key={item.id} {...item} />
                ))
              )}
            </View>
          </VStack>

          {/* <InstagramEmbedComp /> */}
          <EmbeddedWebView />

          {/* <Stack space={8} mt={-4} mb={4}>
            <VStack className="space-y-3 border-b-2 border-amber-300 pb-4">
              <VStack className="inline-flex items-start justify-start gap-24">
                <Text className="font-raleway800 text-2xl text-black">
                  NOTÍCIAS
                </Text>
              </VStack>
            </VStack>
            <HStack space={4}>
              <NewsModal
                image="../assets/noticia01.png"
                details=""
                title="ATENDENTE DE FAST-FOOD OBRIGADA A LIMPAR BANHEIRO RECEBERÁ ADICIONAL"
              />
              <NewsModal
                image="../assets/noticia01.png"
                details=""
                title="ATENDENTE DE FAST-FOOD OBRIGADA A LIMPAR BANHEIRO RECEBERÁ ADICIONAL"
              />
              <Center w={"20%"}>
                <TouchableOpacity
                  onPress={() => navigation.navigate("allNews")}
                >
                  <ArrowRight size={40} color="#2E2E2E" />
                </TouchableOpacity>
              </Center>
            </HStack>
          </Stack> */}

          {/*  <Team /> */}
          <OurTeam />
        </VStack>

        <Stack mx={4}>
          <SiteBanner />
        </Stack>
      </VStack>
    </ScrollView>
  );
};
