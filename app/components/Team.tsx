import { Box, Center, Icon, Text, VStack, View } from "native-base";
import React, { useEffect, useState } from "react";
import PracticeAreaModal from "./PracticeAreaModal";
import TeamModal from "./TeamModal";
import { Loading } from "./Loading";
import { useAppDispatch, useAppSelector } from "../reducers/store";
import { loadDetails } from "../reducers/fetchSlice";

export interface IProfessionals {
  id: string;
  name: string;
  cargo: string;
  email: string;
  photo: string;
  areas_of_expertise: string[];
  languages: string[];
}

const Team = () => {
  const dispatch = useAppDispatch();
  const { details, isLoading } = useAppSelector((state) => state.fetcher);

  // console.log(details?.profissionais.advogados);

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
        {/*   {isLoading ? (
          <Center w={"100%"}>
            <Loading />
          </Center>
        ) : (
          details.profissionais.advogados.map((item) => (
            <TeamModal key={item.id} {...item} />
          ))
        )} */}
      </View>
    </VStack>
  );
};

export default Team;
