import { useNavigation } from "@react-navigation/native";
import {
  Box,
  Center,
  HStack,
  Image,
  ScrollView,
  Stack,
  Text,
  VStack,
} from "native-base";
import { ArrowLeft, ArrowRight, Plus } from "phosphor-react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { AppNavigatorRoutesProps } from "../routes/app.routes";

export const AboutUs = () => {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <Stack bgColor={"white"} pb={10}>
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
                Quem somos nós
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

        <Stack mx={4} alignItems={"center"}>
          <Image
            source={require("../assets/aboutUs1.png")}
            style={{ width: 500, height: 400, marginBottom: 20 }}
            alt={"aboutUs1.png"}
          />
          <TouchableOpacity className="my-4 flex w-full flex-row items-center justify-center space-x-3 rounded-md bg-rose-300 bg-opacity-40 p-4">
            <Text className="mb-1 font-raleway600 text-lg tracking-tight text-zinc-800">
              Veja os endereços dos nossos escritórios
            </Text>
            <ArrowRight size={20} color="#2E2E2E" />
          </TouchableOpacity>
          <Text className="my-4 mr-2 text-justify font-raleway500 text-xl text-zinc-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, qut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Consequat duis aute irure dolor in reprehenderit in
            voluptate vrunt mollit anim id est laborum
          </Text>

          <Text className="my-4 mr-2 text-justify font-raleway500 text-xl text-zinc-800">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, qut aliquip ex ea commodo consequat. Duis aute
            irure dolor in reprehenderit in voluptate velit esse cillum dolore
            eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
            proident, sunt in culpa qui officia deserunt mollit anim id est
            laborum. Consequat duis aute irure dolor in reprehenderit in
            voluptate vrunt mollit anim id est laborum
          </Text>
        </Stack>
      </Stack>
    </ScrollView>
  );
};
