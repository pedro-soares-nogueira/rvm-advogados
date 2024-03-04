import { Box, Modal, Stack, Text } from "native-base";
import React, { useState } from "react";
import { Linking, TouchableOpacity } from "react-native";
import { IAreas } from "../reducers/fetchSlice";

import DireitoTrabalho from "../assets/areas_de_atuacao_icons/Direito do Trabalho.svg";
import DireitoPrevidenciario from "../assets/areas_de_atuacao_icons/Direito Previdenciário.svg";
import DireitoAdministrativo from "../assets/areas_de_atuacao_icons/Direito Administrativo.svg";
import DireitoCivil from "../assets/areas_de_atuacao_icons/Direito Civil.svg";
import DireitoDigital from "../assets/areas_de_atuacao_icons/Direito Digital.svg";
import DireitoTributário from "../assets/areas_de_atuacao_icons/Direito Tributário.svg";
import DireitoFamília from "../assets/areas_de_atuacao_icons/Direito de Família.svg";
import Trânsito from "../assets/areas_de_atuacao_icons/Trânsito.svg";

const iconsMap = {
  Administrativo: {
    icon: DireitoAdministrativo,
    url: "O Direito Administrativo é uma área bastante ampla e atuamos nas suas mais variadas vertentes.",
  },
  "Administrativo Previdenciário": { icon: DireitoPrevidenciario, url: "" },
  Cível: {
    icon: DireitoFamília,
    url: "O Direito Civil é a área mais abrangente do Direito Brasileiro e nosso escritório está preparado para atuar em suas mais variadas vertentes.",
  },
  Previdenciário: {
    icon: DireitoTrabalho,
    url: "Atuamos no ramo do Direito Previdenciário há quase 40 anos e possuímos uma equipe altamente qualificada neste segmento, buscando sempre assegurar aos nossos clientes a percepção do melhor benefício previdenciário a que tem direito.",
  },
  Trabalhista: {
    icon: DireitoDigital,
    url: "Direito do trabalho é o ramo jurídico que estuda as relações de trabalho. Esse direito é composto de conjuntos de normas, princípios e outras fontes jurídicas que regem as relações de trabalho, regulamentando a condição jurídica dos trabalhadores.",
  },
  Tributário: {
    icon: DireitoTributário,
    url: "Diagnosticar as necessidades de nosso cliente e aplicar a legislação tributária de modo mais benéfico ao crescimento de seus negócios é o principal objetivo de nossa equipe tributária.",
  },
  Outros: {
    icon: DireitoTributário,
    url: "Diante de um mundo cada vez mais tecnológico que vem revolucionando o modo como nos relacionamos e fazemos negócios, necessária foi a criação de um novo ramo no Direito que tratasse especificamente sobre essas relações jurídicas.",
  },
};

const NewAreas = (props: IAreas) => {
  const [showModal, setShowModal] = useState(false);

  const IconComponent = iconsMap[props.Nome].icon;

  const openExternalLink = (url: string) => {
    Linking.openURL(url);
  };

  return (
    <>
      <TouchableOpacity
        onPress={() => setShowModal(true)}
        className="mb-7 flex w-[49%] items-start justify-center gap-3 rounded bg-white pb-4 pl-2 pr-6 shadow shadow-gray-600"
      >
        {IconComponent && <IconComponent width={32} height={32} />}
        <Text className="line-clamp-2 font-raleway700 text-xl text-neutral-900">
          {props.Nome}
        </Text>
      </TouchableOpacity>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)} size={"xl"}>
        <Modal.Content maxWidth="800px" pb={10}>
          <Modal.CloseButton />
          <Modal.Header>
            <Text className="font-raleway700 text-2xl uppercase text-zinc-800">
              {props.Nome}
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Stack space={4}>
              <Text className="text-xl font-bold text-zinc-800">
                36 ANOS DE EXPERIÊNCIA
              </Text>

              <Box>
                {/* <TouchableOpacity
                  onPress={() => openExternalLink(iconsMap[props.Nome].url)}
                  className="flex w-full items-center justify-between gap-0.5 rounded-md bg-yellow-100 px-4 py-4"
                >
                  <Text className="text-center ">
                    Acesse nosso site para mais informações. Clique aqui
                  </Text>
                </TouchableOpacity> */}

                <Text className="mt-10 text-lg font-normal">
                  {iconsMap[props.Nome].url}
                </Text>
              </Box>
            </Stack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default NewAreas;
