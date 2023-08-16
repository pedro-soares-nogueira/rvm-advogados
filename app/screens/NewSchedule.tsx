import {
  Box,
  Center,
  Checkbox,
  Divider,
  HStack,
  Heading,
  Icon,
  Image,
  Input,
  Modal,
  ScrollView,
  Select,
  Stack,
  Text,
  VStack,
  View,
} from "native-base";
import {
  IdentificationCard,
  Phone,
  WhatsappLogo,
  Plus,
  ArrowRight,
} from "phosphor-react-native";
import React, { useState } from "react";
import { ScheduleCard } from "../components/ScheduleCard";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "../components/Button";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import CalendarPicker from "react-native-calendar-picker";

const practiceAreaDetails = [
  { id: 1, icon: "shield-check", title: "Previdenciário" },
  { id: 2, icon: "credit-card", title: "Tributário" },
  { id: 3, icon: "webhook", title: "Trabalhista" },
  { id: 4, icon: "star", title: "Cívil" },
  { id: 5, icon: "versions", title: "Administrativo" },
  { id: 6, icon: "sort-asc", title: "Digital" },
  { id: 7, icon: "stack", title: "Transito" },
];

const customMonthNames = [
  "Janeiro",
  "Fevereiro",
  "Março",
  "Abril",
  "Maio",
  "Junho",
  "Julho",
  "Agosto",
  "Setembro",
  "Outubro",
  "Novembro",
  "Dezembro",
];
const customDayNames = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"];

export const NewSchedule = () => {
  const [areas, setAreas] = useState(practiceAreaDetails);
  const [ableTo, setAbleTo] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [groupValues, setGroupValues] = useState([]);

  const [step, setStep] = useState(0);

  const setModalOpen = () => {
    setShowModal(!showModal);
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} background={"white"}>
        <VStack className="bg-white shadow-md shadow-gray-400">
          <VStack className="h-16"></VStack>
          <HStack className="flex w-full items-center justify-between p-4">
            <Image
              source={require("../assets/horizontal_logo.png")}
              style={{ width: 250, height: 40 }}
              alt={"Logo RVM"}
            />
            {/* <Main_logo width={200} /> */}
          </HStack>

          <Box className="mx-4 border-t border-gray-300"></Box>

          <VStack className="space-y-5 px-4 py-6">
            <VStack className="space-y-2">
              <Text className="mb-3 font-raleway700 text-2xl text-zinc-800">
                Novo pré-agendamento
              </Text>
              <Text className="font-raleway700 text-3xl text-zinc-800">
                Jhon Doe
              </Text>
              <Stack className="flex flex-row items-center">
                <Box className="mr-2">
                  <IdentificationCard size={30} color="#2E2E2E" />
                </Box>
                <Text className="mb-2.5 font-raleway600 text-xl text-zinc-800">
                  999-999-999-99
                </Text>
              </Stack>
            </VStack>
            {/* STEPS */}
            {step === 0 ? (
              <HStack space={4} pt={8}>
                <Stack className="flex-col items-start justify-start gap-0.5">
                  <Text className="mb-2 font-raleway700 text-xl text-zinc-800">
                    Passo 01
                  </Text>
                  <Box className="h-3 w-44 rounded-full bg-amber-300"></Box>
                </Stack>
                <Stack className="flex-col items-start justify-start gap-0.5">
                  <Text className="mb-2 font-raleway700 text-xl text-zinc-800">
                    Passo 02
                  </Text>
                  <Box className="h-3 w-44 rounded-full bg-gray-300"></Box>
                </Stack>
              </HStack>
            ) : (
              <HStack space={4} pt={8}>
                <Stack className="flex-col items-start justify-start gap-0.5">
                  <Text className="mb-2 font-raleway700 text-xl text-zinc-800">
                    Passo 01
                  </Text>
                  <Box className="h-3 w-44 rounded-full bg-amber-300"></Box>
                </Stack>
                <Stack className="flex-col items-start justify-start gap-0.5">
                  <Text className="mb-2 font-raleway700 text-xl text-zinc-800">
                    Passo 02
                  </Text>
                  <Box className="h-3 w-44 rounded-full bg-amber-300"></Box>
                </Stack>
              </HStack>
            )}
          </VStack>
        </VStack>
        {/* STEPS */}
        {step === 0 ? (
          <>
            <VStack space={4} mx={4} py={8}>
              <>
                <Text className="max-w-xs text-start font-raleway500 text-lg">
                  Escolha a área que deseja
                </Text>
                <TouchableOpacity
                  onPress={setModalOpen}
                  className="flex flex-col items-end rounded-md border border-gray-300 p-4"
                >
                  <Icon
                    as={AntDesign}
                    name="caretdown"
                    color="gray.300"
                    size={6}
                  />
                </TouchableOpacity>
                <Modal
                  isOpen={showModal}
                  onClose={() => setShowModal(false)}
                  justifyContent="flex-end"
                  size="full"
                >
                  <Modal.Content>
                    <Modal.CloseButton />
                    <Modal.Header>
                      <Text className="font-raleway600 text-2xl text-zinc-800">
                        Áreas de atuação
                      </Text>
                    </Modal.Header>
                    <Modal.Body>
                      <Checkbox.Group
                        onChange={setGroupValues}
                        value={groupValues}
                        accessibilityLabel="formas de pagamento"
                      >
                        {areas.map((item) => (
                          <Checkbox
                            key={item.id}
                            value={item.title}
                            my={2}
                            colorScheme={"green"}
                            fontSize={20}
                            className="font-raleway400"
                          >
                            {item.title}
                          </Checkbox>
                        ))}
                      </Checkbox.Group>
                    </Modal.Body>
                    <Modal.Footer>
                      <HStack space={4}>
                        <Button
                          w={40}
                          title="Sair"
                          onPress={setModalOpen}
                          variant={"outline"}
                        />
                        <Button
                          w={40}
                          title="Continuar"
                          onPress={setModalOpen}
                        />
                      </HStack>
                    </Modal.Footer>
                  </Modal.Content>
                </Modal>
              </>
              <Text className="max-w-xs text-start font-raleway500 text-lg">
                Como podemos te ajudar?
              </Text>
              <Input fontSize={20} multiline numberOfLines={8} />
            </VStack>

            <HStack space={4} margin={"auto"}>
              <Button title="Voltar" w={"45%"} variant={"outline"} />
              <Button title="Próximo" w={"45%"} onPress={() => setStep(1)} />
            </HStack>
          </>
        ) : (
          <>
            <VStack space={4} mx={4} pt={8}>
              <Text className="max-w-xs text-start font-raleway500 text-lg">
                Selecione o dia para o pré agendamento.
              </Text>
            </VStack>

            <Box className="m-4 rounded-md border border-gray-300 p-4">
              <CalendarPicker
                weekdays={customDayNames}
                previousTitle={"   Anterior"}
                nextTitle={"Próximo   "}
                todayBackgroundColor="#FFF0B6"
                months={customMonthNames}
                onDateChange={(date) => {
                  console.log("Selected date:", date);
                }}
              />
            </Box>

            <HStack space={4} margin={"auto"}>
              <Button title="Voltar" w={"45%"} variant={"outline"} />
              <Button title="Próximo" w={"45%"} onPress={() => setStep(1)} />
            </HStack>
          </>
        )}
      </VStack>
    </ScrollView>
  );
};
