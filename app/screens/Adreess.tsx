import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Center,
  Divider,
  HStack,
  Image,
  ScrollView,
  Stack,
  Text,
  VStack,
} from "native-base";
import { ArrowLeft, ArrowRight, Plus, Share } from "phosphor-react-native";
import React from "react";
import { Linking, TouchableOpacity } from "react-native";
import { AppNavigatorRoutesProps } from "../routes/app.routes";

export const Adreess = () => {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const goBack = () => {
    navigation.goBack();
  };

  const openGoogleMaps = () => {
    const latitude = "-30.0349024";
    const longitude = "-51.2218644";
    const label = "Local";

    const url = `https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}&query_place_id=${label}`;

    Linking.openURL(url);
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <Stack bgColor={"white"}>
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
                Nossos endereços
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

        <Stack mx={4} mb={8} alignItems={"center"}>
          <Box
            borderWidth={1}
            borderColor={"gray.300"}
            rounded={4}
            width={"100%"}
            p={4}
          >
            <Text className="font-raleway700 text-2xl">PORTO ALEGRE/RS</Text>
            <Divider my={4} />
            <Stack mb={8}>
              <Text className="font-raleway700 text-xl">SEDE 1</Text>
              <Text className="font-raleway400 text-xl">
                RUA DOS ANDRADAS, 1137/1107 CENTRO HISTÓRICO
              </Text>
            </Stack>

            <TouchableOpacity
              onPress={() => openGoogleMaps()}
              className="flex flex-row items-center justify-center gap-2 rounded-md bg-amber-300 px-3 pb-3 pt-1"
            >
              <Text className="mb-1 font-raleway600 text-lg text-zinc-800">
                Ver no mapa
              </Text>
              <Share size={20} color="#2E2E2E" />
            </TouchableOpacity>

            <Divider my={4} />
            <Stack mb={8}>
              <Text className="font-raleway700 text-xl">SEDE 2</Text>
              <Text className="font-raleway400 text-xl">
                RUA DOS ANDRADAS, 1137/1107 CENTRO HISTÓRICO
              </Text>
            </Stack>

            <TouchableOpacity
              onPress={() => openGoogleMaps()}
              className="flex flex-row items-center justify-center gap-2 rounded-md bg-amber-300 px-3 pb-3 pt-1"
            >
              <Text className="mb-1 font-raleway600 text-lg text-zinc-800">
                Ver no mapa
              </Text>
              <Share size={20} color="#2E2E2E" />
            </TouchableOpacity>
          </Box>
        </Stack>

        <Stack mx={4} mb={8} alignItems={"center"}>
          <Box
            borderWidth={1}
            borderColor={"gray.300"}
            rounded={4}
            width={"100%"}
            p={4}
          >
            <Text className="font-raleway700 text-2xl">ARROIO DO MEIO/RS</Text>
            <Divider my={4} />
            <Stack mb={8}>
              <Text className="font-raleway700 text-xl">SEDE 1</Text>
              <Text className="font-raleway400 text-xl">
                RUA DOS ANDRADAS, 1137/1107 CENTRO HISTÓRICO
              </Text>
            </Stack>

            <TouchableOpacity
              onPress={() => openGoogleMaps()}
              className="flex flex-row items-center justify-center gap-2 rounded-md bg-amber-300 px-3 pb-3 pt-1"
            >
              <Text className="mb-1 font-raleway600 text-lg text-zinc-800">
                Ver no mapa
              </Text>
              <Share size={20} color="#2E2E2E" />
            </TouchableOpacity>
          </Box>
        </Stack>

        <Stack mx={4} mb={8} alignItems={"center"}>
          <Box
            borderWidth={1}
            borderColor={"gray.300"}
            rounded={4}
            width={"100%"}
            p={4}
          >
            <Text className="font-raleway700 text-2xl">CARLOS BARBOSA/RS</Text>
            <Divider my={4} />
            <Stack mb={8}>
              <Text className="font-raleway700 text-xl">SEDE 1</Text>
              <Text className="font-raleway400 text-xl">
                RUA DOS ANDRADAS, 1137/1107 CENTRO HISTÓRICO
              </Text>
            </Stack>

            <TouchableOpacity
              onPress={() => openGoogleMaps()}
              className="flex flex-row items-center justify-center gap-2 rounded-md bg-amber-300 px-3 pb-3 pt-1"
            >
              <Text className="mb-1 font-raleway600 text-lg text-zinc-800">
                Ver no mapa
              </Text>
              <Share size={20} color="#2E2E2E" />
            </TouchableOpacity>
          </Box>
        </Stack>
      </Stack>
    </ScrollView>
  );
};
