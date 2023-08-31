import {
  FormControl,
  Input,
  Modal,
  Center,
  Text,
  Stack,
  VStack,
  Divider,
  Image,
} from "native-base";
import React, { useEffect, useState } from "react";
import { Button } from "./Button";
import { TouchableOpacity } from "react-native";
import DireitoAdministrativo from "../assets/areas_de_atuacao_icons/Direito Administrativo.svg";
import DireitoCivil from "../assets/areas_de_atuacao_icons/Direito Civil.svg";
import DireitoDigital from "../assets/areas_de_atuacao_icons/Direito Digital.svg";
import DireitoPrevidenciário from "../assets/areas_de_atuacao_icons/Direito Previdenciário.svg";
import DireitoTributário from "../assets/areas_de_atuacao_icons/Direito Tributário.svg";
import DireitoFamília from "../assets/areas_de_atuacao_icons/Direito de Família.svg";
import DireitoTrabalho from "../assets/areas_de_atuacao_icons/Direito do Trabalho.svg";
import Trânsito from "../assets/areas_de_atuacao_icons/Trânsito.svg";
import { IAreasDeAtuação } from "../reducers/fetchSlice";

const PracticeAreaModal = (props: IAreasDeAtuação) => {
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

  const htmlContent = destaque_items;

  const extractTextFromHtml = (html) => {
    if (!html) {
      return "";
    }
    return html.replace(/<[^>]*>/g, "");
  };

  const extractedText = extractTextFromHtml(htmlContent);
  const lines = extractedText.split("\n");

  // const iconUrl = `../assets/areas_de_atuacao_icons/${name}.svg`;

  return (
    <>
      <TouchableOpacity
        onPress={() => setShowModal(true)}
        className="mb-7 flex w-[49%] items-start justify-center gap-3 rounded bg-white pb-4 pl-2 pr-6 shadow shadow-gray-600"
      >
        <Text className="line-clamp-2 font-raleway700 text-xl text-neutral-900">
          {name}
        </Text>
      </TouchableOpacity>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size={"xl"}>
        <Modal.Content maxWidth="800px" pb={10}>
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

            {destaque_items && (
              <Stack space={4}>
                <Divider mt={10} />
                {/*  <HTML
                  source={{ html: destaque_items }}
                  tagsStyles={htmlStyles}
                  contentWidth={100}
                /> */}
                {/* <Text className="font-raleway500 text-xl text-zinc-800">
                  {extractedText}
                </Text> */}
                {lines.map((line, index) => (
                  <Text
                    className="font-raleway700 text-xl text-zinc-800"
                    key={index}
                  >
                    {line}
                  </Text>
                ))}

                {/* <List.Section>
                  {lines.map((item, index) => (
                    <List.Item
                      className="font-raleway500 text-xl text-zinc-800"
                      key={index}
                      title={item}
                      left={(props) => <List.Icon {...props} icon="" />}
                    />
                  ))}
                </List.Section> */}
              </Stack>
            )}
            {texto_1 || texto_2 || texto_3 ? (
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
            ) : (
              <></>
            )}

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
