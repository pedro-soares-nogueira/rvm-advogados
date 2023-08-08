import { Box, Text, VStack } from "native-base";
import { AlignBottom, CreditCard, ShieldCheck } from "phosphor-react-native";
import React from "react";
import { ScrollView } from "react-native";

const PracticeArea = () => {
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack>
        <VStack className="space-y-3 border-b-2 border-amber-300 pb-4">
          <VStack className="inline-flex items-start justify-start gap-24">
            <Text className="text-2xl font-bold text-black">
              Áreas de atuação
            </Text>
          </VStack>
          <Text className="text-lg font-normal text-zinc-800">
            A Terceira Turma do Tribunal Superior do Trabalho rejeitou recurso
            de uma
          </Text>
        </VStack>

        <Box className="grid grid-cols-2 gap-2 ">
          <Box className="flex items-start justify-center gap-2.5 rounded bg-white px-5 py-3.5 shadow shadow-gray-600">
            <ShieldCheck size={36} color="#2E2E2E" />
            <Text className="text-xl font-bold text-neutral-900">
              Previdenciário
            </Text>
          </Box>

          <Box className="flex items-start justify-center gap-2.5 rounded bg-white px-5 py-3.5 shadow shadow-gray-600">
            <CreditCard size={36} color="#2E2E2E" />
            <Text className="text-xl font-bold text-neutral-900">
              Tributário
            </Text>
          </Box>

          <Box className="flex items-start justify-center gap-2.5 rounded bg-white px-5 py-3.5 shadow shadow-gray-600">
            <AlignBottom size={36} color="#2E2E2E" />
            <Text className="text-xl font-bold text-neutral-900">
              Trabalhista
            </Text>
          </Box>
        </Box>
      </VStack>
    </ScrollView>
  );
};

export default PracticeArea;
