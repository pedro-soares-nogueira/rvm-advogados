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

const PracticeAreaModal = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Center>
      <Button
        title="Modal"
        size={"lg"}
        onPress={() => setShowModal(true)}
      ></Button>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="800px">
          <Modal.CloseButton />
          <Modal.Header>
            <Text className="font-raleway700 text-2xl text-zinc-800">
              DIREITO PREVIDENCIÁRIO
            </Text>
          </Modal.Header>
          <Modal.Body>
            <Stack space={4}>
              <Text className="text-xl font-bold text-zinc-800">
                36 ANOS DE EXPERIÊNCIA
              </Text>
              <Text className="font-raleway500 text-xl text-zinc-800">
                Atuamos no ramo do Direito Previdenciário há quase 40 anos e
                possuímos uma equipe altamente qualificada neste segmento,
                buscando sempre assegurar aos nossos clientes a percepção do
                melhor benefício previdenciário a que tem direito.
              </Text>
              <Text className="font-raleway500 text-xl text-zinc-800">
                Nossa expertise abrange não só o Regime Geral de Previdência
                Social (INSS), como também os Regimes Próprios (municipais,
                estaduais e da União Federal) e os Planos de Previdência
                Complementar (Previdência Privada).
              </Text>
            </Stack>

            <Divider mt={10} />

            <Stack>
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
            </Stack>
          </Modal.Body>
        </Modal.Content>
      </Modal>
    </Center>
  );
};

export default PracticeAreaModal;
