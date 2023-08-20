import { Box, Icon, Text, VStack, View } from "native-base";
import React from "react";
import PracticeAreaModal from "./PracticeAreaModal";
import TeamModal from "./TeamModal";

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
      title: "Áreas de atuação: Direito Previdenciário, Direito Administrativo",
    },
    {
      id: 3,
      name: "PEDRO INÁCIO VON AMELN E SILVA",
      title: "Áreas de atuação: Direito do Trabalho, Direito Administrativo",
    },
    {
      id: 4,
      name: "LIANDRA FRACALOSSI",
      title: "Áreas de atuação: Direito Previdenciário",
    },
    {
      id: 5,
      name: "ANGELA VON MÜHLEN",
      title: "Áreas de atuação: Direito do Trabalho, Direito Administrativo",
    },
    {
      id: 6,
      name: "PEDRO INÁCIO VON AMELN E SILVA",
      title: "Áreas de atuação: Direito Previdenciário, Direito Administrativo",
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
          altamente positivos e garante uma posição destacada do escritório no
          mercado.
        </Text>
      </VStack>

      <View className="mt-6 flex flex-row flex-wrap justify-between p-4">
        {data.map((item) => (
          <TeamModal key={item.id} title={item.name} details={item.title} />
        ))}
      </View>
    </VStack>
  );
};

export default Team;
