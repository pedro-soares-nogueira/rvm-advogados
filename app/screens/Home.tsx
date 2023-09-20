import {
  Box,
  Center,
  Divider,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
  View,
} from "native-base";
import React, { useEffect } from "react";
import { ArrowRight, Plus, SignOut } from "phosphor-react-native";
import { ScrollView, TouchableOpacity } from "react-native";
import SiteBanner from "../components/SiteBanner";
import PracticeAreaModal from "../components/PracticeAreaModal";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../routes/app.routes";
import { Loading } from "../components/Loading";
import { useAppDispatch, useAppSelector } from "../reducers/store";
import { loadDetails } from "../reducers/fetchSlice";
import Team from "../components/Team";
import { useAuth } from "../contexts/authContext";
import { loadUser } from "../reducers/loggedUserSlice";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { AuthNavigatorRoutesProps } from "../routes/auth.roures";
import { SignOutButton } from "../components/SignOutButton";

export const Home = () => {
  const dispatch = useAppDispatch();
  const { details, isLoading } = useAppSelector((state) => state.fetcher);
  const { user } = useAppSelector((state) => state.user);
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const dataAtual = new Date();
  const dataFormatada = format(dataAtual, "dd 'de' MMMM, yyyy", {
    locale: ptBR,
  });

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
    dispatch(loadUser());
  }, []);

  console.log("renderizou");

  const handleHome = () => {
    navigation.navigate("home");
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} background={"white"} pb={10}>
        <VStack className="bg-white shadow-md shadow-gray-400">
          <VStack className="h-16"></VStack>
          <HStack className="flex w-full items-center justify-between p-4">
            <TouchableOpacity onPress={() => handleHome()}>
              <Image
                source={require("../assets/horizontal_logo.png")}
                style={{ width: 250, height: 40 }}
                alt={"Logo RVM"}
              />
            </TouchableOpacity>
            <SignOutButton />
          </HStack>

          <Box className="mx-4 border-t border-gray-300"></Box>

          <VStack className="space-y-5 px-4 py-6">
            <VStack className="space-y-2">
              <Text className="font-raleway700 text-2xl text-zinc-800">
                Olá, {user ? user?.name : ""}
              </Text>
              <Text className="font-raleway700 text-xl text-zinc-800">
                {dataFormatada}
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
          {/* <ScheduleCard /> */}
          <VStack>
            <VStack className="space-y-3 border-b-2 border-amber-300 pb-4">
              <VStack className="inline-flex items-start justify-start gap-24">
                <Text className="font-raleway800 text-2xl text-black">
                  Áreas de atuação
                </Text>
              </VStack>
              <Text className="font-raleway500 text-lg text-zinc-800">
                Com mais de 36 anos de história, nosso escritório tem como
                diferencial a atuação personalizada em causas estratégicas e de
                elevada complexidade, nas mais variadas áreas do Direito.
              </Text>
            </VStack>

            <View className="mt-6 p-4">
              {isLoading ? (
                <>
                  <Center w={"100%"}>
                    <Loading />
                  </Center>
                </>
              ) : (
                <Box
                  mb={-10}
                  w={"100%"}
                  className="flex flex-row flex-wrap justify-between "
                >
                  {details.areas_de_atuacao.map((item) => (
                    <PracticeAreaModal key={item.id} {...item} />
                  ))}
                </Box>
              )}
            </View>
          </VStack>

          <Divider />

          {/* <InstagramEmbedComp /> */}
          {/* <EmbeddedWebView /> */}

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

          <Team />
        </VStack>

        <Stack mx={4}>
          <SiteBanner />
        </Stack>
      </VStack>
    </ScrollView>
  );
  /*  if (!isLoading && user?.name) { */
  /*  } else {
    return (
      <Center flex={1}>
        <Loading />
      </Center>
    );
  } */
};
