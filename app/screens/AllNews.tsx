import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Flex,
  HStack,
  Image,
  ScrollView,
  Stack,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { TouchableOpacity } from "react-native";
import { AppNavigatorRoutesProps } from "../routes/app.routes";
import { ArrowLeft } from "phosphor-react-native";
import NewsModal from "../components/NewsModal";

const AllNews = () => {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <Stack bgColor={"white"} flex={1} pb={10}>
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
                Notícias
              </Text>
            </VStack>
          </VStack>
        </VStack>
        <Stack m="4">
          <TouchableOpacity
            onPress={goBack}
            className="flex w-16 flex-row items-center justify-center gap-2 rounded-md pb-4 pl-3 pr-5 pt-2"
          >
            <ArrowLeft size={24} weight="bold" color="#2E2E2E" />
          </TouchableOpacity>
        </Stack>

        <Flex flexWrap={"wrap"} mx={4} flexDirection={"row"}>
          <Stack m={2} space={4} className="w-[42%]">
            <Stack className="space-y-3 border-b-2 border-amber-300 pb-2">
              <Text className="font-raleway500 text-lg text-zinc-800">
                09 Agosto 2023
              </Text>
            </Stack>
            <NewsModal
              image="../assets/noticia01.png"
              details=""
              title="ATENDENTE DE FAST-FOOD OBRIGADA A LIMPAR BANHEIRO RECEBERÁ ADICIONAL"
            />
          </Stack>

          <Stack m={2} space={4} className="w-[42%]">
            <Stack className="space-y-3 border-b-2 border-amber-300 pb-2">
              <Text className="font-raleway500 text-lg text-zinc-800">
                09 Agosto 2023
              </Text>
            </Stack>
            <NewsModal
              image="../assets/noticia01.png"
              details=""
              title="ATENDENTE DE FAST-FOOD OBRIGADA A LIMPAR BANHEIRO RECEBERÁ ADICIONAL"
            />
          </Stack>

          <Stack m={2} space={4} className="w-[42%]">
            <Stack className="space-y-3 border-b-2 border-amber-300 pb-2">
              <Text className="font-raleway500 text-lg text-zinc-800">
                09 Agosto 2023
              </Text>
            </Stack>
            <NewsModal
              image="../assets/noticia01.png"
              details=""
              title="ATENDENTE DE FAST-FOOD OBRIGADA A LIMPAR BANHEIRO RECEBERÁ ADICIONAL"
            />
          </Stack>

          <Stack m={2} space={4} className="w-[42%]">
            <Stack className="space-y-3 border-b-2 border-amber-300 pb-2">
              <Text className="font-raleway500 text-lg text-zinc-800">
                09 Agosto 2023
              </Text>
            </Stack>
            <NewsModal
              image="../assets/noticia01.png"
              details=""
              title="ATENDENTE DE FAST-FOOD OBRIGADA A LIMPAR BANHEIRO RECEBERÁ ADICIONAL"
            />
          </Stack>

          <Stack m={2} space={4} className="w-[42%]">
            <Stack className="space-y-3 border-b-2 border-amber-300 pb-2">
              <Text className="font-raleway500 text-lg text-zinc-800">
                09 Agosto 2023
              </Text>
            </Stack>
            <NewsModal
              image="../assets/noticia01.png"
              details=""
              title="ATENDENTE DE FAST-FOOD OBRIGADA A LIMPAR BANHEIRO RECEBERÁ ADICIONAL"
            />
          </Stack>

          <Stack m={2} space={4} className="w-[42%]">
            <Stack className="space-y-3 border-b-2 border-amber-300 pb-2">
              <Text className="font-raleway500 text-lg text-zinc-800">
                09 Agosto 2023
              </Text>
            </Stack>
            <NewsModal
              image="../assets/noticia01.png"
              details=""
              title="ATENDENTE DE FAST-FOOD OBRIGADA A LIMPAR BANHEIRO RECEBERÁ ADICIONAL"
            />
          </Stack>
        </Flex>
      </Stack>
    </ScrollView>
  );
};

export default AllNews;
