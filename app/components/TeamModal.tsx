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
import React, { useState } from "react";
import { Button } from "./Button";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Octicons";

interface IPracticeArea {
  title: string;
  details: string;
}

const TeamModal = ({ title, details }: IPracticeArea) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <TouchableOpacity
        onPress={() => setShowModal(true)}
        className="mb-7 flex w-[49%] items-start justify-center gap-3 rounded bg-white pb-4 pr-4 shadow shadow-gray-600"
      >
        <Text className="mb-1 font-raleway700 text-xl text-neutral-900">
          {title}
        </Text>
        <Text>{details}</Text>
      </TouchableOpacity>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size={"xl"}>
        <Modal.Content maxWidth="800px">
          <Modal.CloseButton />
          <Modal.Header>
            <Text className="font-raleway700 text-2xl uppercase text-zinc-800">
              {title}
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Stack space={4}>
              <Text className="font-raleway500 text-xl text-zinc-800">
                Renato é advogado, graduado em Direito pela Pontifícia
                Universidade Católica do Rio Grande do Sul (PUCRS).
                Pós-graduou-se em Educação pela Universidade do Vale do Rio dos
                Sinos (UNISINOS), mesma universidade na qual obteve o título de
                Mestre em Direito. Atualmente, é doutorando em Direito pela
                Universidade Autônoma de Lisboa (Portugal) e pós-doutorando em
                Direito pela Universidade de Salamanca (Espanha).
              </Text>
              <Text className="font-raleway500 text-xl text-zinc-800">
                No meio acadêmico, por mais de 30 anos, foi professor do curso
                de Direito da Universidade do Vale do Rio dos Sinos (UNISINOS),
                onde lecionou disciplinas de Direito Previdenciário, Direito do
                Trabalho e Direito Tributário.
              </Text>
              <Text className="font-raleway500 text-xl text-zinc-800">
                Atualmente, é professor convidado em cursos de especialização e
                extensão nas disciplinas de Direito Previdenciário e Direito do
                Trabalho, bem como é palestrante em seminários, congressos e
                eventos relacionados a essas áreas. Sua experiência no ramo do
                Direito Previdenciário iniciou em 1985, quando exerceu cargo de
                servidor da Previdência Social, no qual permaneceu por quatorze
                anos, tendo, inclusive, chefiado o Posto de Aposentadorias de
                Porto Alegre e o Serviço de Convênios entre empresas e
                Previdência Social.
              </Text>
              <Text className="font-raleway500 text-xl text-zinc-800">
                Sua experiência no ramo do Direito Previdenciário iniciou em
                1985, quando exerceu cargo de servidor da Previdência Social, no
                qual permaneceu por quatorze anos, tendo, inclusive, chefiado o
                Posto de Aposentadorias de Porto Alegre e o Serviço de Convênios
                entre empresas e Previdência Social.
              </Text>
            </Stack>

            <Divider mt={10} />

            <Stack>
              <VStack className="mt-10 space-y-3 border-b-2 border-amber-300 pb-4">
                <VStack className="inline-flex items-start justify-start gap-24">
                  <Text className="font-raleway800 text-2xl text-black">
                    ÁREAS DE ATUAÇÃO
                  </Text>
                </VStack>
              </VStack>
              <VStack space={4} mt={4}>
                <Text className="font-raleway500 text-lg text-zinc-800">
                  º Direito Previdenciário
                </Text>
                <Text className="font-raleway500 text-lg text-zinc-800">
                  º Direito do Trabalho
                </Text>
                <Text className="font-raleway500 text-lg text-zinc-800">
                  º Direito Administrativo
                </Text>
              </VStack>
            </Stack>

            <Divider mt={10} />

            <Stack mb={10}>
              <VStack className="mt-10 space-y-3 border-b-2 border-amber-300 pb-4">
                <VStack className="inline-flex items-start justify-start gap-24">
                  <Text className="font-raleway800 text-2xl text-black">
                    IDIOMAS ESTRANGEIROS
                  </Text>
                </VStack>
              </VStack>
              <VStack space={4} mt={4}>
                <Text className="font-raleway500 text-lg text-zinc-800">
                  º Espanhol Inglês
                </Text>
                <Text className="font-raleway500 text-lg text-zinc-800">
                  º Espanhol Inglês
                </Text>
              </VStack>
            </Stack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default TeamModal;
