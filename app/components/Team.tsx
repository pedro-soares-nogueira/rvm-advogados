import { Box, Center, Icon, Text, VStack, View } from "native-base";
import React, { useEffect, useState } from "react";
import PracticeAreaModal from "./PracticeAreaModal";
import TeamModal from "./TeamModal";
import { Loading } from "./Loading";
import { useAppSelector } from "../reducers/store";

const advogados = [
  {
    id: 5,
    name: "Angela Von Mühlen",
    cargo: "Advogada",
    email: "angela@rvmadvogados.com.br",
    photo: "users/V2GCfpwM1VoIE3PATyR5b40xLVxsKPQgZK3PIePV.png",
    areas_of_expertise: ["Direito Previdenciário", "Direito Administrativo"],
    languages: ["Espanhol", "Inglês", "Alemão"],
  },
  {
    id: 7,
    name: "Renato Von Mühlen",
    cargo: "Advogado",
    email: "renato@rvmadvogados.com.br",
    photo: "users/YCUi08vvOG4D9SarYS81rxjYRl2E94THvorjxGTQ.png",
    areas_of_expertise: [
      "Direito Previdenciário",
      "Direito do Trabalho",
      "Direito Administrativo",
    ],
    languages: ["Espanhol", "Inglês"],
  },
  {
    id: 8,
    name: "Liandra Fracalossi",
    cargo: "Advogada",
    email: "liandra@rvmadvogados.com.br",
    photo: "users/5TVzlOevJ07K5FjVznD0opGddOd1RSphC2mEGs29.jpeg",
    areas_of_expertise: ["Direito Previdenciário"],
    languages: ["Inglês"],
  },
  {
    id: 9,
    name: "Pedro Inácio von Ameln Ferreira e Silva",
    cargo: "Advogado",
    email: "pedro@rvmadvogados.com.br",
    photo: "users/S0K04dizu5NgPcsucCuwuQFs7ZavpAK8mpwPi6i0.jpg",
    areas_of_expertise: [
      "Direito Digital",
      "Direito Tributário",
      "Direito Civil",
    ],
    languages: ["Inglês"],
  },
  {
    id: 10,
    name: "Sandra Mendonça Suello da Silva",
    cargo: "Advogada",
    email: "sandra.suello@rvmadvogados.com.br",
    photo: "users/DNEQoA14PYNqAC1qE1k3Ua3g8fWmGsuLUCZCRoif.jpg",
    areas_of_expertise: ["Direito Previdenciário"],
    languages: [""],
  },
  {
    id: 11,
    name: "Jaqueline Von Mühlen",
    cargo: "Advogada",
    email: "jaqueline@rvmadvogados.com.br",
    photo: "users/kt7jJFbDH1JTw4bJMngrnKkP0eDCn5AXUD0KBRFO.png",
    areas_of_expertise: ["Direito Previdenciário", "Direito do Trabalho"],
    languages: ["Inglês", "Espanhol", "Francês"],
  },
  {
    id: 12,
    name: "Eduardo Machado Mildner",
    cargo: "Advogado",
    email: "eduardo@rvmadvogados.com.br",
    photo: "users/fL1md7phCQjIMecnMSf53AwdaUpIusR50kDRDLxz.jpeg",
    areas_of_expertise: [
      "Direito Previdenciário",
      "Direito Previdenciário Militar",
    ],
    languages: ["Inglês", "Espanhol"],
  },
  {
    id: 13,
    name: "Aline Cezar Becker",
    cargo: "Advogada",
    email: "aline@rvmadvogados.com.br",
    photo: "users/PrHAvJaDoaEQuYfj7prEgdGvagmN1gJ1MSl8coy8.jpeg",
    areas_of_expertise: ["Direito do Trabalho"],
    languages: ["Inglês"],
  },
  {
    id: 15,
    name: "Valquiria Peter Bacellar",
    cargo: "Advogada",
    email: "valquiria@rvmadvogados.com.br",
    photo: "users/yiuV50MygbbvSa8YTJ82UfGafpHqkLOVAojVGbce.jpeg",
    areas_of_expertise: ["Direito Previdenciário"],
    languages: [""],
  },
  {
    id: 16,
    name: "Juliane Teodoro",
    cargo: "Advogada",
    email: "juliane@rvmadvogados.com.br",
    photo: "users/1CZF2mmXwZMDfTRWq1bMtgLkkRlEVATlGa582Kfn.jpeg",
    areas_of_expertise: ["Direito Previdenciário"],
    languages: [""],
  },
  {
    id: 40,
    name: "BIANCA ALMEIDA DOS SANTOS",
    cargo: "Advogada",
    email: "bianca@rvmadvogados.com.br",
    photo: "users/AqCkVNguJ3VodieVI4zSsl6C9kMc1DRnwcGmw9Sv.png",
    areas_of_expertise: ["Previdenciário"],
    languages: [""],
  },
  {
    id: 41,
    name: "RENATA DOS SANTOS",
    cargo: "Advogada",
    email: "renata@rvmadvogados.com.br",
    photo: "users/aCs6fP9BcYxaOnbnRhvRArpYpLjxeG7PWW7BA5oH.png",
    areas_of_expertise: ["Previdenciário"],
    languages: [""],
  },
  {
    id: 62,
    name: "LILIAN COLOMBO",
    cargo: "Auxiliar Jurídico",
    email: "rvm@rvmadvogados.com.br",
    photo: "users/TkMI2rBaxlLVHbNrD29oGjgVlYvO9NV1DdvGjFbT.png",
    areas_of_expertise: ["Previdenciário"],
    languages: [""],
  },
];

const Team = () => {
  const { details, isLoading } = useAppSelector((state) => state.fetcher);

  console.log(advogados);

  return (
    <VStack>
      <VStack className="space-y-3 border-b-2 border-amber-300 pb-4">
        <VStack className="inline-flex items-start justify-start gap-24">
          <Text className="font-raleway800 text-3xl text-black">
            Conheça nossa equipe---
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
        {advogados.map((item) => {
          <Text>{item.name}</Text>;
        })}
      </View>
    </VStack>
  );
};

export default Team;
