import {
  Box,
  Center,
  Divider,
  HStack,
  Image,
  Modal,
  Stack,
  Text,
  VStack,
  View,
} from "native-base";
import React, { useEffect, useState } from "react";
import { ArrowRight, Plus } from "phosphor-react-native";
import { ScrollView, TouchableOpacity } from "react-native";
import SiteBanner from "../components/SiteBanner";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../routes/app.routes";
import { Loading } from "../components/Loading";
import { useAppDispatch, useAppSelector } from "../reducers/store";
import { loadAreas, loadDetails, loadLawyers } from "../reducers/fetchSlice";
import { format } from "date-fns";
import ptBR from "date-fns/locale/pt-BR";
import { SignOutButton } from "../components/SignOutButton";
import { Button } from "../components/Button";
import { useAuth } from "../contexts/authContext";
import NewAreas from "../components/NewAreas";

export const Home = () => {
  const dispatch = useAppDispatch();
  const { lawyers, areas, isLoading } = useAppSelector(
    (state) => state.fetcher
  );
  // const { user } = useAppSelector((state) => state.user);

  const { userToken } = useAuth();

  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const dataAtual = new Date();
  const dataFormatada = format(dataAtual, "dd 'de' MMMM, yyyy", {
    locale: ptBR,
  });

  const [modalVisible, setModalVisible] = useState(false);

  const handleSizeClick = (newSize) => {
    setModalVisible(!modalVisible);
  };

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
    dispatch(loadAreas());
    dispatch(loadLawyers());
  }, []);

  console.log("renderizou");
  // console.log(lawyers);

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
            {userToken && <SignOutButton />}
          </HStack>

          <Box className="mx-4 border-t border-gray-300"></Box>

          <VStack className="space-y-5 px-4 py-6">
            <VStack className="space-y-2">
              <Text className="font-raleway700 text-2xl text-zinc-800">
                Seja bem vindo{/* , {user ? user?.name : ""} */}
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
              onPress={() =>
                userToken !== null ? handleNewSchedule() : setModalVisible(true)
              }
              className="flex w-64 flex-row items-center justify-center gap-2 rounded-md bg-amber-300 px-3 pb-3 pt-1"
            >
              <Text className="mb-1 font-raleway600 text-lg text-zinc-800">
                Novo pré-agendamento
              </Text>
              <Plus size={20} color="#2E2E2E" />
            </TouchableOpacity>

            {/* LOGIN MODAL */}
            <Modal isOpen={modalVisible} onClose={setModalVisible} size={"lg"}>
              <Modal.Content>
                <Modal.CloseButton />
                <Modal.Header>
                  <Text fontSize={"xl"} fontWeight={"bold"}>
                    Você parece não estar logado
                  </Text>
                </Modal.Header>
                <Modal.Body>
                  <Text fontSize={"lg"}>
                    Para realizar um pré-agendamento você precisa estar logado.
                    Entre ou faça agora seu cadastro
                  </Text>
                </Modal.Body>
                <Modal.Footer>
                  <HStack justifyContent={"space-between"} w={"full"}>
                    <Button
                      fontSize={"md"}
                      title="Entrar"
                      onPress={() => {
                        navigation.navigate("signIn");
                      }}
                    />
                  </HStack>
                </Modal.Footer>
              </Modal.Content>
            </Modal>
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
                  {areas.map((item, index) => (
                    <NewAreas key={index} {...item} />
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

          <VStack>
            <VStack className="space-y-3 border-b-2 border-amber-300 pb-4">
              <VStack className="inline-flex items-start justify-start gap-24">
                <Text className="font-raleway800 text-3xl text-black">
                  Conheça nossa equipe
                </Text>
              </VStack>
              <Text className="font-raleway500 text-lg capitalize text-zinc-800">
                PROFISSIONAIS DO SETOR JURÍDICO
              </Text>
              <Text className="font-raleway500 text-lg text-zinc-800 ">
                O profundo conhecimento técnico de nossos advogados, aliado ao
                comprometimento com nossos clientes, permite oferecer resultados
                altamente positivos e garante uma posição destacada do
                escritório no mercado.
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
                  {lawyers.Profissionais.map((item, index) => (
                    <Box
                      key={index}
                      className="mb-7 flex w-[49%] items-start justify-center gap-3 rounded bg-white pb-4 pl-2 pr-6 shadow shadow-gray-600"
                    >
                      <Text className="line-clamp-2 font-raleway700 text-xl text-neutral-900">
                        {item.Nome}
                      </Text>
                    </Box>
                  ))}
                </Box>
              )}
            </View>
          </VStack>
        </VStack>

        <Stack mx={4} mt={10}>
          <SiteBanner />
        </Stack>
      </VStack>
    </ScrollView>
  );
};
