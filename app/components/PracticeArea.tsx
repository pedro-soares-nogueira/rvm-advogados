import { AlignBottom, CreditCard, ShieldCheck } from "phosphor-react-native";
import { Box, Text, VStack, View } from "native-base";
import React from "react";
import Icon from "react-native-vector-icons/Octicons";

const PracticeArea = () => {
  const data = [
    { id: 1, icon: "shield-check", title: "Previdenciário" },
    { id: 2, icon: "credit-card", title: "Tributário" },
    { id: 3, icon: "webhook", title: "Trabalhista" },
    { id: 4, icon: "star", title: "Cívil" },
    { id: 5, icon: "versions", title: "Administrativo" },
    { id: 6, icon: "sort-asc", title: "Digital" },
    { id: 7, icon: "stack", title: "Transito" },
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
            className="mb-7 flex w-[49%] items-start justify-center gap-3 rounded bg-white px-5 py-3.5 shadow shadow-gray-600"
          >
            <Icon name={item.icon} size={36} color="#2E2E2E" />
            <Text className="mb-1 font-raleway700 text-xl text-neutral-900">
              {item.title}
            </Text>
          </Box>
        ))}
      </View>
    </VStack>
  );
};

export default PracticeArea;
