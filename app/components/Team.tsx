import { Box, Icon, Text, VStack, View } from "native-base";
import React from "react";

const Team = () => {
  const data = [
    {
      id: 1,
      name: "RENATO VON MÜHLEN",
      title:
        "Áreas de atuação: Direito Previdenciário, Direito do Trabalho, Direito Administrativo",
    },
    {
      id: 2,
      name: "ANGELA VON MÜHLEN",
      title:
        "Áreas de atuação: Direito Previdenciário, Direito do Trabalho, Direito Administrativo",
    },
    {
      id: 3,
      name: "PEDRO INÁCIO VON AMELN E SILVA",
      title:
        "Áreas de atuação: Direito Previdenciário, Direito do Trabalho, Direito Administrativo",
    },
    {
      id: 4,
      name: "LIANDRA FRACALOSSI",
      title:
        "Áreas de atuação: Direito Previdenciário, Direito do Trabalho, Direito Administrativo",
    },
    {
      id: 5,
      name: "ANGELA VON MÜHLEN",
      title:
        "Áreas de atuação: Direito Previdenciário, Direito do Trabalho, Direito Administrativo",
    },
    {
      id: 6,
      name: "PEDRO INÁCIO VON AMELN E SILVA",
      title:
        "Áreas de atuação: Direito Previdenciário, Direito do Trabalho, Direito Administrativo",
    },
    {
      id: 7,
      name: "ANGELA VON MÜHLEN",
      title:
        "Áreas de atuação: Direito Previdenciário, Direito do Trabalho, Direito Administrativo",
    },
  ];

  return (
    <VStack>
      <VStack className="space-y-3 border-b-2 border-amber-300 pb-4">
        <VStack className="inline-flex items-start justify-start gap-24">
          <Text className="font-raleway800 text-2xl text-black">
            Áreas de atuação
          </Text>
        </VStack>
        <Text className="font-raleway500 text-lg text-zinc-800">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </Text>
      </VStack>

      <View className="mt-6 flex flex-row flex-wrap justify-between p-4">
        {data.map((item) => (
          <Box
            key={item.id}
            className="mb-7 flex w-[49%] items-start justify-center gap-2 rounded bg-white px-2 py-2 pb-3 pt-1 shadow shadow-gray-600"
          >
            <Text className="mb-1 font-raleway700 text-xl uppercase text-neutral-900">
              {item.name}
            </Text>
            <Text className="mb-1 font-raleway500 text-base text-neutral-900">
              {item.title}
            </Text>
          </Box>
        ))}
      </View>
    </VStack>
  );
};

export default Team;
