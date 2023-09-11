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
import DireitoTributário from "../assets/areas_de_atuacao_icons/Direito Tributário.svg";
import DireitoFamília from "../assets/areas_de_atuacao_icons/Direito de Família.svg";
import Trânsito from "../assets/areas_de_atuacao_icons/Trânsito.svg";
import { IAreasDeAtuação } from "../reducers/fetchSlice";

import DireitoTrabalho from "../assets/areas_de_atuacao_icons/Direito do Trabalho.svg";
import DireitoPrevidenciario from "../assets/areas_de_atuacao_icons/Direito Previdenciário.svg";

const iconsMap = {
  "Direito Previdenciário": DireitoPrevidenciario,
  "Direito do Trabalho": DireitoTrabalho,
  "Direito Administrativo": DireitoAdministrativo,
  "Direito Civil": DireitoCivil,
  "Direito Digital": DireitoDigital,
  "Direito Tributário": DireitoTributário,
  "Direito de Família": DireitoFamília,
  Trânsito: Trânsito,
};

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

  const IconComponent = iconsMap[name];

  const htmlContent = destaque_items;

  const extractTextFromHtml = (html) => {
    if (!html) {
      return "";
    }
    return html.replace(/<[^>]*>/g, "");
  };

  const extractedText = extractTextFromHtml(htmlContent);
  const lines = extractedText.split("\n");

  return (
    <>
      <TouchableOpacity
        onPress={() => setShowModal(true)}
        className="mb-7 flex w-[49%] items-start justify-center gap-3 rounded bg-white pb-4 pl-2 pr-6 shadow shadow-gray-600"
      >
        {IconComponent && (
          <IconComponent width={32} height={32} /> // Renderize o ícone se estiver no mapa
        )}
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
                {lines.map((line, index) => (
                  <Text
                    className="font-raleway700 text-xl text-zinc-800"
                    key={index}
                  >
                    {line}
                  </Text>
                ))}
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
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default PracticeAreaModal;
