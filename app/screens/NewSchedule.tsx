import {
  Box,
  Center,
  Checkbox,
  Divider,
  Flex,
  HStack,
  Heading,
  Icon,
  Image,
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
  X,
  Warning,
  CheckCircle,
} from "phosphor-react-native";
import React, { useEffect, useState } from "react";
import { ScheduleCard } from "../components/ScheduleCard";
import { AntDesign } from "@expo/vector-icons";
import { Button } from "../components/Button";
import {
  Platform,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import CalendarPicker from "react-native-calendar-picker";
import moment, { Moment } from "moment";
import { Input } from "../components/Input";
import { useIsFocused, useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../routes/app.routes";

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

interface IShiftSchedule {
  shifts: string[] | [];
  selectedDate: string;
}

export const NewSchedule = () => {
  const [areas, setAreas] = useState(practiceAreaDetails);
  const [ableTo, setAbleTo] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [practiceArea, setPracticeArea] = useState([]);
  const [shifts, setShifts] = useState<string[] | []>([]);
  const [shiftSchedule, setShiftSchedule] = useState<IShiftSchedule[] | []>([]);
  const [step, setStep] = useState(0);
  const [selectedDate, setSelectedDate] = useState<string | undefined>(
    undefined
  );

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const setModalOpen = () => {
    setShowModal(!showModal);
  };

  const handleAddShiftSchedule = () => {
    const newShiftSchedule = { shifts, selectedDate };

    setShiftSchedule((prev) =>
      prev ? [...prev, newShiftSchedule] : [newShiftSchedule]
    );

    setSelectedDate(undefined);
    setPracticeArea([]);
  };

  const handleDeletShiftSchedule = (index: number) => {
    setShiftSchedule((prev) => prev.filter((_, i) => i !== index));
  };

  const handleHome = () => {
    navigation.navigate("home");
  };

  console.log(shiftSchedule);

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} background={"white"}>
        {step === 0 && (
          <>
            <VStack className="bg-white shadow-md shadow-gray-400">
              <VStack className="h-16"></VStack>
              <HStack className="flex w-full items-center justify-between p-4">
                <Image
                  source={require("../assets/horizontal_logo.png")}
                  style={{ width: 250, height: 40 }}
                  alt={"Logo RVM"}
                />
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
              </VStack>
            </VStack>
            <VStack space={4} mx={4} py={8}>
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
                      onChange={setPracticeArea}
                      value={practiceArea}
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
                      <Button w={40} title="Continuar" onPress={setModalOpen} />
                    </HStack>
                  </Modal.Footer>
                </Modal.Content>
              </Modal>
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
        )}

        {step === 1 && (
          <>
            <VStack className="bg-white shadow-md shadow-gray-400">
              <VStack className="h-16"></VStack>
              <HStack className="flex w-full items-center justify-between p-4">
                <Image
                  source={require("../assets/horizontal_logo.png")}
                  style={{ width: 250, height: 40 }}
                  alt={"Logo RVM"}
                />
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
              </VStack>
            </VStack>
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
                selectedDayColor="#FFDE5A"
                todayBackgroundColor="#FFF0B6"
                months={customMonthNames}
                onDateChange={(date) => {
                  setSelectedDate(moment(date).format("YYYY-MM-DD"));
                }}
              />
            </Box>

            <VStack space={4} mx={4} pt={6}>
              <Text className="max-w-xs text-start font-raleway500 text-lg">
                Selecione o turno que estará livre nesse dia.
              </Text>
            </VStack>

            <Box mx={4} w={"100%"}>
              <Checkbox.Group
                colorScheme="yellow"
                className="my-6 flex flex-row items-center justify-start"
                defaultValue={shifts}
                w={"100%"}
                accessibilityLabel="Escolha um turno"
                onChange={(values) => {
                  setShifts(values || []);
                }}
              >
                <Checkbox size="lg" value="manha" mr={10}>
                  Manhã
                </Checkbox>
                <Checkbox size="lg" value="tarde">
                  Tarde
                </Checkbox>
              </Checkbox.Group>

              <Button
                title="Adicionar horário à lista"
                textSize={20}
                mb={1}
                w={"60%"}
                variant={"outline"}
                onPress={() => handleAddShiftSchedule()}
              />

              {shiftSchedule.length === 0 && (
                <>
                  <Text className="mb-1 mt-6 font-raleway800 text-xl tracking-tight text-zinc-800">
                    Lista de turnos vazia
                  </Text>
                </>
              )}
              {shiftSchedule !== undefined && (
                <VStack space={4} mt={6}>
                  {shiftSchedule.map((item, index) => {
                    return (
                      <VStack space={4}>
                        <Stack
                          w={"80%"}
                          className="flex flex-row items-center justify-between space-x-3 
                                      rounded-md bg-[#FFF0B6] bg-opacity-40 p-4"
                        >
                          <Text className="text-xl font-bold capitalize tracking-tight text-zinc-800">
                            {moment(item.selectedDate).format("DD/MM/YYYY")} •{" "}
                            {item.shifts.join(", ")}
                          </Text>
                          <TouchableOpacity
                            onPress={() => handleDeletShiftSchedule(index)}
                          >
                            <X size={20} color="#2E2E2E" />
                          </TouchableOpacity>
                        </Stack>
                      </VStack>
                    );
                  })}
                </VStack>
              )}

              <Stack mt={6} space={4}>
                <Stack space={2}>
                  <Text className="max-w-xs text-start font-raleway500 text-lg">
                    Observação
                  </Text>
                  <Input />
                </Stack>

                <Stack space={2}>
                  <Text className="max-w-xs text-start font-raleway500 text-lg">
                    Tem preferencia por algum porfissional?
                  </Text>
                  <Input />
                </Stack>
              </Stack>
            </Box>

            <HStack space={4} margin={"auto"} my={10}>
              <Button
                title="Voltar"
                w={"45%"}
                textSize={18}
                variant={"outline"}
              />
              <Button
                title="Próximo"
                w={"45%"}
                textSize={18}
                onPress={() => setStep(2)}
              />
            </HStack>
          </>
        )}

        {step === 2 && (
          <>
            <VStack className="bg-white shadow-md shadow-gray-400">
              <VStack className="h-16"></VStack>
              <HStack className="flex w-full items-center justify-between p-4">
                <Image
                  source={require("../assets/horizontal_logo.png")}
                  style={{ width: 250, height: 40 }}
                  alt={"Logo RVM"}
                />
              </HStack>

              <Box className="mx-4 border-t border-gray-300"></Box>

              <VStack className="space-y-5 px-4 py-6">
                <HStack space={6} alignItems={"center"}>
                  <Warning size={44} />
                  <Text className="max-w-xs font-raleway700 text-2xl text-zinc-800">
                    Os dados do pré-agendamento conferem?
                  </Text>
                </HStack>
              </VStack>
            </VStack>
            <VStack
              space={4}
              mx={4}
              mt={10}
              p={4}
              borderWidth={1}
              borderColor={"gray.300"}
              borderRadius={4}
            >
              <Text className="max-w-xs font-raleway700 text-2xl text-zinc-800">
                John Doe,
              </Text>
              <Text className="max-w-xs font-raleway700 text-2xl text-zinc-800">
                Administrativo
              </Text>
              <Text className="text-start font-raleway500 text-lg">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis
              </Text>
              <VStack space={4} mt={6}>
                <Stack
                  w={"80%"}
                  className="flex flex-row items-center justify-between space-x-3 
                                      rounded-md bg-[#FFF0B6] bg-opacity-40 p-4"
                >
                  <Text className="text-xl font-bold capitalize tracking-tight text-zinc-800">
                    18/07/2023 •Tarde
                  </Text>
                  <TouchableOpacity>
                    <X size={20} color="#2E2E2E" />
                  </TouchableOpacity>
                </Stack>
                <Stack
                  w={"80%"}
                  className="flex flex-row items-center justify-between space-x-3 
                                      rounded-md bg-[#FFF0B6] bg-opacity-40 p-4"
                >
                  <Text className="text-xl font-bold capitalize tracking-tight text-zinc-800">
                    18/07/2023 •Tarde
                  </Text>
                  <TouchableOpacity>
                    <X size={20} color="#2E2E2E" />
                  </TouchableOpacity>
                </Stack>
              </VStack>

              <Button
                title="Adicionar mais datas"
                w={"45%"}
                textSize={18}
                variant={"outline"}
              />
              <VStack mt={6} space={4}>
                <Text className="text-start font-raleway500 text-lg">
                  Confirme seu telefone, entraremos em contato para confirmação
                  do atendimento e data.
                </Text>
                <Stack className="flex flex-row items-center">
                  <Box className="mr-2">
                    <Phone size={30} color="#2E2E2E" />
                  </Box>
                  <Text className="mb-2.5 text-xl font-semibold text-zinc-800">
                    (99) 9999-9999
                  </Text>
                </Stack>
              </VStack>
            </VStack>

            <HStack space={4} margin={"auto"} my={10}>
              <Button
                title="Voltar"
                w={"45%"}
                textSize={18}
                variant={"outline"}
              />
              <Button
                title="Confirmar"
                w={"45%"}
                textSize={18}
                bgColor={"green.600"}
                onPress={() => setStep(3)}
              />
            </HStack>
          </>
        )}

        {step === 3 && (
          <>
            <VStack className="bg-white shadow-md shadow-gray-400">
              <VStack className="h-16"></VStack>
              <HStack className="flex w-full items-center justify-between p-4">
                <Image
                  source={require("../assets/horizontal_logo.png")}
                  style={{ width: 250, height: 40 }}
                  alt={"Logo RVM"}
                />
              </HStack>

              <Box className="mx-4 border-t border-gray-300"></Box>

              <VStack className="space-y-5 px-4 py-6">
                <HStack space={2} alignItems={"center"}>
                  <CheckCircle size={44} />
                  <Text className="max-w-xs font-raleway700 text-2xl text-zinc-800">
                    Confirmado!
                  </Text>
                </HStack>
              </VStack>
            </VStack>
            <VStack
              space={4}
              mx={4}
              mt={10}
              p={4}
              borderWidth={1}
              borderColor={"gray.300"}
              borderRadius={4}
            >
              <Text className="max-w-xs font-raleway700 text-2xl text-zinc-800">
                Seu pré-agendamento está confirmado.
              </Text>
              <Text className="text-start font-raleway500 text-lg">
                Nós entraremos em contato para confirmação do horário. Fique
                atento!
              </Text>
              <VStack space={4} mt={6}>
                <Stack
                  w={"80%"}
                  className="flex flex-row items-center justify-between space-x-3 
                                      rounded-md bg-[#D3FFCF] bg-opacity-40 p-4"
                >
                  <Text className="text-xl font-bold capitalize tracking-tight text-zinc-800">
                    18/07/2023 • Tarde
                  </Text>
                </Stack>
                <Stack
                  w={"80%"}
                  className="flex flex-row items-center justify-between space-x-3 
                                      rounded-md bg-[#D3FFCF] bg-opacity-40 p-4"
                >
                  <Text className="text-xl font-bold capitalize tracking-tight text-zinc-800">
                    18/07/2023 • Tarde
                  </Text>
                </Stack>
              </VStack>
              <VStack mt={6} space={4}>
                <Text className="text-start font-raleway500 text-lg">
                  Seu telefone
                </Text>
                <Stack className="flex flex-row items-center">
                  <Box className="mr-2">
                    <Phone size={30} color="#2E2E2E" />
                  </Box>
                  <Text className="mb-2.5 text-xl font-semibold text-zinc-800">
                    (99) 9999-9999
                  </Text>
                </Stack>
                <Text className="text-start font-raleway500 text-lg">
                  Caso precise entrar em contato, você pode clicar aqui!
                </Text>
              </VStack>
            </VStack>

            <HStack space={4} margin={"auto"} my={10}>
              <Button
                title="Ir para página inicial"
                w={"93%"}
                textSize={18}
                variant={"outline"}
                onPress={() => handleHome()}
              />
            </HStack>
          </>
        )}
      </VStack>
    </ScrollView>
  );
};