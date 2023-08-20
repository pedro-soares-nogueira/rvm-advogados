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
  Box,
} from "native-base";
import React, { useState } from "react";
import { Button } from "./Button";
import { TouchableOpacity } from "react-native";
import Icon from "react-native-vector-icons/Octicons";

interface INewsModal {
  title: string;
  details: string;
  image: string;
}

const NewsModal = ({ title, details, image }: INewsModal) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Box>
      <TouchableOpacity onPress={() => setShowModal(true)}>
        <Image
          source={require("../assets/noticia01.png")}
          style={{ width: 450, height: 450, margin: "auto" }}
          alt={"Noticia"}
        />
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
                A Justiça do Trabalho condenou uma loja de rede de fast-food,
                localizada na região Centro-Sul de Belo Horizonte, a pagar
                adicional de insalubridade de 40% a uma ex-empregada que fazia a
                limpeza dos banheiros. Conforme a decisão, a mulher trabalhava
                como auxiliar no preparo de lanches, mas era obrigada a fazer a
                faxina dos sanitários em sistema de rodízio com os outros
                empregados.
              </Text>
              <Text className="font-raleway500 text-xl text-zinc-800">
                A decisão é dos julgadores da Primeira Turma do Tribunal
                Regional do Trabalho de Minas (TRT-MG). De acordo com o
                documento, ficou comprovado que as instalações sanitárias eram
                frequentadas por grande número de pessoas e que a trabalhadora
                fazia a limpeza delas de forma rotineira. Durante o processo, a
                funcionária relatou que também atuava na chapa, no caixa,
                atendia clientes e cobrava o preço, além de fazer a limpeza do
                salão e a retirada de produtos nas câmaras de congelamento e
                resfriamento.
              </Text>
              <Text className="font-raleway500 text-xl text-zinc-800">
                Uma perícia realizada no local detectou a existência de contato
                da trabalhadora com lixo urbano durante a prestação de serviços.
                Na ocasião, o perito constatou que a empregada exercia diversas
                atividades no estabelecimento. Além da limpeza dos banheiros,
                ela auxilia no preparo de lanches para servir aos clientes,
                fritando hambúrgueres, batata frita, entre outros serviços
                correlatos.
              </Text>
              <Text className="font-raleway500 text-xl text-zinc-800">
                As investigações mostraram ainda que o trabalho desenvolvido
                pela empregada é diferente da limpeza em ambientes domésticos e
                escritórios, sendo possível o enquadramento nas atividades
                envolvendo agentes biológicos, o que configura insalubridade em
                grau máximo - 40%, durante todo o contrato de trabalho.
              </Text>
              <Text className="font-raleway500 text-xl text-zinc-800">
                A trabalhadora já recebeu os créditos trabalhistas e o processo
                foi arquivado definitivamente.
              </Text>
            </Stack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Box>
  );
};

export default NewsModal;
