import {
  FormControl,
  Input,
  Modal,
  Center,
  Text,
  Stack,
  VStack,
  Divider,
} from "native-base";
import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Octicons";
import HTML from "react-native-render-html";
import { Raleway_400Regular } from "@expo-google-fonts/raleway";

export interface IPracticeArea {
  id?: string;
  name?: string;
  resume?: string;
  thumb?: string;
  order?: string;
  active?: string;
  link?: string;
  descricao?: string;
  destaque_chamada?: string;
  frase_contato?: string;
  destaque_items?: string;
  deleted_at?: string;
  created_at?: string;
  updated_at?: string;
  texto_4?: string;
  texto_3?: string;
  texto_2?: string;
  texto_1?: string;
  resume2?: string;
}

const PracticeAreaModal = (props: IPracticeArea) => {
  const {
    id,
    name,
    resume,
    thumb,
    order,
    active,
    link,
    descricao,
    destaque_chamada,
    frase_contato,
    destaque_items,
    deleted_at,
    created_at,
    updated_at,
    texto_4,
    texto_3,
    texto_2,
    texto_1,
    resume2,
  } = props;
  const [showModal, setShowModal] = useState(false);

  const htmlStyles = {
    ul: {
      fontSize: 20,
      fontFamily: "Raleway_400Regular",
      color: "black",
      listStyleType: "none",
      paddingLeft: 0,
    },
    li: {
      marginBottom: 8,
    },
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setShowModal(true)}
        className="mb-7 flex w-[49%] items-start justify-center gap-3 rounded bg-white px-5 py-3.5 shadow shadow-gray-600"
      >
        <Icon name="shield-check" size={36} color="#2E2E2E" />
        <Text className="mb-1 font-raleway700 text-xl text-neutral-900">
          {name}
        </Text>
      </TouchableOpacity>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size={"xl"}>
        <Modal.Content maxWidth="800px">
          <Modal.CloseButton />
          <Modal.Header>
            <Text className="font-raleway700 text-2xl uppercase text-zinc-800">
              {name}
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Stack space={4}>
              <Text className="text-xl font-bold text-zinc-800">
                36 ANOS DE EXPERIÊNCIA
              </Text>
              {destaque_chamada && (
                <>
                  <Text className="font-raleway500 text-xl text-zinc-800">
                    {destaque_chamada}
                  </Text>
                  <Divider mt={4} />
                </>
              )}

              <Text className="font-raleway500 text-xl text-zinc-800">
                {resume}
              </Text>

              <Text className="font-raleway500 text-xl text-zinc-800">
                {resume2}
              </Text>
            </Stack>

            <Divider mt={10} />

            {destaque_items && (
              <HTML source={{ html: destaque_items }} tagsStyles={htmlStyles} />
            )}

            <Stack space={6}>
              <Text className="font-raleway500 text-xl text-zinc-800">
                {texto_3}
              </Text>

              <Text className="font-raleway500 text-xl text-zinc-800">
                {texto_2}
              </Text>

              <Divider mt={2} />

              <Text className="font-raleway500 text-xl text-zinc-800">
                {texto_1}
              </Text>
            </Stack>

            {/* <Stack>
              <VStack className="mt-10 space-y-3 border-b-2 border-amber-300 pb-4">
                <VStack className="inline-flex items-start justify-start gap-24">
                  <Text className="font-raleway800 text-2xl text-black">
                    INSS
                  </Text>
                </VStack>
                <Text className="font-raleway500 text-lg text-zinc-800">
                  ATIVIDADES DA FASE ADMINISTRATIVA
                </Text>
              </VStack>
              <VStack space={4} mt={4}>
                <Text className="font-raleway500 text-lg text-zinc-800">
                  º Planejamento previdenciário para obtenção do melhor
                  benefício possível;
                </Text>
                <Text className="font-raleway500 text-lg text-zinc-800">
                  º Requerimentos para concessão e revisão de benefícios
                  previdenciários (especial/tempo de serviço/contribuição,
                  rural/urbano, invalidez, idade, pensões por morte, etc);
                </Text>
                <Text className="font-raleway500 text-lg text-zinc-800">
                  º Requerimentos de benefícios assistenciais (LOAS);
                </Text>
                <Text className="font-raleway500 text-lg text-zinc-800">
                  º Requerimentos para expedição de Certidão de Tempo de
                  Contribuição (CTC);
                </Text>
                <Text className="font-raleway500 text-lg text-zinc-800">
                  º Justificações Administrativas para averbação de tempo de
                  serviço;
                </Text>
                <Text className="font-raleway500 text-lg text-zinc-800">
                  º Recursos administrativos; Sustentações orais perante o
                  Conselho de Recursos da Previdência Social (CRPS).
                </Text>
              </VStack>

              <VStack className="mt-10 space-y-3 border-b-2 border-amber-300 pb-4">
                <Text className="font-raleway500 text-lg text-zinc-800">
                  ATIVIDADES DA FASE JUDICIAL
                </Text>
              </VStack>
              <VStack space={4} mt={4}>
                <Text className="font-raleway500 text-lg text-zinc-800">
                  º Planejamento previdenciário para obtenção do melhor
                  benefício possível;
                </Text>
                <Text className="font-raleway500 text-lg text-zinc-800">
                  º Requerimentos para concessão e revisão de benefícios
                  previdenciários (especial/tempo de serviço/contribuição,
                  rural/urbano, invalidez, idade, pensões por morte, etc);
                </Text>
                <Text className="font-raleway500 text-lg text-zinc-800">
                  º Requerimentos de benefícios assistenciais (LOAS);
                </Text>
                <Text className="font-raleway500 text-lg text-zinc-800">
                  º Requerimentos para expedição de Certidão de Tempo de
                  Contribuição (CTC);
                </Text>
                <Text className="font-raleway500 text-lg text-zinc-800">
                  º Justificações Administrativas para averbação de tempo de
                  serviço;
                </Text>
                <Text className="font-raleway500 text-lg text-zinc-800">
                  º Recursos administrativos; Sustentações orais perante o
                  Conselho de Recursos da Previdência Social (CRPS).
                </Text>
              </VStack>
            </Stack> 
            
            <Divider mt={10} />

            <Stack>
              <VStack className="mt-10 space-y-3 border-b-2 border-amber-300 pb-4">
                <VStack className="inline-flex items-start justify-start gap-24">
                  <Text className="font-raleway800 text-2xl text-black">
                    REGIMES PRÓPRIOS
                  </Text>
                </VStack>
                <Text className="font-raleway500 text-lg text-zinc-800">
                  ATIVIDADES DA FASE ADMINISTRATIVA
                </Text>
              </VStack>
              <VStack space={4} mt={4}>
                <Text className="font-raleway500 text-lg text-zinc-800">
                  º Planejamento previdenciário para obtenção do melhor
                  benefício possível;
                </Text>
                <Text className="font-raleway500 text-lg text-zinc-800">
                  º Requerimentos para concessão e revisão de benefícios
                  previdenciários (especial/tempo de serviço/contribuição,
                  rural/urbano, invalidez, idade, pensões por morte, etc);
                </Text>
                <Text className="font-raleway500 text-lg text-zinc-800">
                  º Requerimentos de benefícios assistenciais (LOAS);
                </Text>
                <Text className="font-raleway500 text-lg text-zinc-800">
                  º Requerimentos para expedição de Certidão de Tempo de
                  Contribuição (CTC);
                </Text>
                <Text className="font-raleway500 text-lg text-zinc-800">
                  º Justificações Administrativas para averbação de tempo de
                  serviço;
                </Text>
                <Text className="font-raleway500 text-lg text-zinc-800">
                  º Recursos administrativos; Sustentações orais perante o
                  Conselho de Recursos da Previdência Social (CRPS).
                </Text>
              </VStack>
              <VStack className="mt-10 space-y-3 border-b-2 border-amber-300 pb-4">
                <Text className="font-raleway500 text-lg text-zinc-800">
                  ATIVIDADES DA FASE JUDICIAL
                </Text>
              </VStack>
              <VStack space={4} mt={4}>
                <Text className="font-raleway500 text-lg text-zinc-800">
                  º Planejamento previdenciário para obtenção do melhor
                  benefício possível;
                </Text>
                <Text className="font-raleway500 text-lg text-zinc-800">
                  º Requerimentos para concessão e revisão de benefícios
                  previdenciários (especial/tempo de serviço/contribuição,
                  rural/urbano, invalidez, idade, pensões por morte, etc);
                </Text>
                <Text className="font-raleway500 text-lg text-zinc-800">
                  º Requerimentos de benefícios assistenciais (LOAS);
                </Text>
                <Text className="font-raleway500 text-lg text-zinc-800">
                  º Requerimentos para expedição de Certidão de Tempo de
                  Contribuição (CTC);
                </Text>
                <Text className="font-raleway500 text-lg text-zinc-800">
                  º Justificações Administrativas para averbação de tempo de
                  serviço;
                </Text>
                <Text className="font-raleway500 text-lg text-zinc-800">
                  º Recursos administrativos; Sustentações orais perante o
                  Conselho de Recursos da Previdência Social (CRPS).
                </Text>
              </VStack>
            </Stack> */}
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default PracticeAreaModal;
