import { Modal, Stack, Text } from "native-base";
import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
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
  Administrativo: DireitoAdministrativo,
  "Administrativo Previdenciário": DireitoPrevidenciario,
  Civel: DireitoTributário,
  Previdenciário: DireitoTrabalho,
  Trabalhista: DireitoDigital,
  Tributário: DireitoTributário,
  Outros: DireitoFamília,
};

const NewAreas = (props: IAreas) => {
  const [showModal, setShowModal] = useState(false);

  const IconComponent = iconsMap[props.Nome];

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
            </Stack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </>
  );
};

export default NewAreas;
