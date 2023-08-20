import { Box, Center, HStack, Image, Stack, Text, VStack } from "native-base";
import React from "react";
import { Linking, TouchableOpacity } from "react-native";
import { ArrowLeft, WhatsappLogo } from "phosphor-react-native";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../routes/app.routes";

const Whatsapp = () => {
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const goBack = () => {
    navigation.goBack();
  };

  const handleWhatsApp = () => {
    const phoneNumber = "XXXXXXXXXXXX";
    const message = "Olá, esta é a mensagem que você deseja enviar";

    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    Linking.openURL(url);
  };

  return (
    <Stack flex={1} bg={"white"}>
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
              Contato
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
      <Center mt={10} className="space-y-6">
        <Text className="text-center font-raleway700 text-2xl text-zinc-800">
          Você tem contato direto ao WhatsApp institucional da nossa equipe
        </Text>
        <TouchableOpacity
          onPress={() => handleWhatsApp()}
          className="mt-4 flex w-96 flex-row items-center justify-center gap-2 rounded-md border-2 border-[#78620acb] px-3 pb-3 pt-1 text-center"
        >
          <Text className="mb-1 font-raleway600 text-lg text-[#78620A]">
            WhatsApp
          </Text>
          <WhatsappLogo size={20} color="#78620A" />
        </TouchableOpacity>
      </Center>
    </Stack>
  );
};

export default Whatsapp;
