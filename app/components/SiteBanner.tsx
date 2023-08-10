import { Box, Center, Flex, HStack, Image, Text } from "native-base";
import { ArrowRight } from "phosphor-react-native";
import React from "react";
import { Linking, TouchableOpacity } from "react-native";
import Main_logo from "../assets/HLogo.svg";
import BannerImage from "../assets/banner_image.svg";

const SiteBanner = () => {
  const openExternalLink = async () => {
    const url = "https://rvmadvogados.com.br/";
    const supported = await Linking.canOpenURL(url);

    if (supported) {
      await Linking.openURL(url);
    } else {
      console.error("Não é possível abrir esta URL:", url);
    }
  };
  return (
    <TouchableOpacity
      onPress={openExternalLink}
      className="flex w-full items-center justify-between gap-0.5 rounded-md bg-yellow-100 pl-4"
    >
      <HStack space={4}>
        <Box className="flex min-h-[9rem] flex-col items-start justify-between py-6">
          <Box className="flex flex-col items-start justify-start gap-1">
            <Text className="font-raleway700 text-lg tracking-tight text-zinc-800">
              Mais informações
            </Text>
            <Text className="font-raleway700 text-3xl text-zinc-800">
              Visite nosso site
            </Text>
          </Box>
          <Flex className="flex flex-row items-center justify-start gap-3">
            <Text className="mb-1 font-raleway700 text-lg tracking-tight text-zinc-800">
              Estamos online
            </Text>
            <ArrowRight size={22} />
          </Flex>
        </Box>

        <Box className="">
          <BannerImage width={200} />
        </Box>
      </HStack>
    </TouchableOpacity>
  );
};

export default SiteBanner;
