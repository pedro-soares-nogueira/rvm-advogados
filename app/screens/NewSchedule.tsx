import {
  Box,
  Checkbox,
  HStack,
  Image,
  ScrollView,
  Stack,
  Text,
  VStack,
  View,
} from "native-base";
import {
  IdentificationCard,
  Phone,
  X,
  Warning,
  CheckCircle,
} from "phosphor-react-native";
import React, { useState } from "react";
import { Button } from "../components/Button";
import { StyleSheet, TextInput, TouchableOpacity } from "react-native";
import moment from "moment";
import { Input } from "../components/Input";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../routes/app.routes";
import { Picker } from "@react-native-picker/picker";
import DateTimePickerModal from "react-native-modal-datetime-picker";

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

const styles = StyleSheet.create({
  pickerContainer: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
    paddingTop: 5,
    paddingBottom: 4,
  },
});

export const NewSchedule = () => {
  const [step, setStep] = useState(0);
  const [areas, setAreas] = useState(practiceAreaDetails);
  const [ableTo, setAbleTo] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [practiceArea, setPracticeArea] = useState([]);
  const [shifts, setShifts] = useState<string[] | []>([]);
  const [shiftSchedule, setShiftSchedule] = useState<IShiftSchedule[] | []>([]);
  const [hasProfPreference, setHasprofPreference] = useState(false);

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const setModalOpen = () => {
    setShowModal(!showModal);
  };

  const [selectedDate, setSelectedDate] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDatePicker = (date) => {
    setSelectedDate(date); // moment(selectedDate).format("DD/MM/YYYY")
    hideDatePicker();
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

  const handleProfPreference = () => {
    setHasprofPreference(true);
  };

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
              {/* <TouchableOpacity
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
              </Modal> */}
              <View style={styles.pickerContainer}>
                <Picker
                  selectedValue={practiceArea}
                  onValueChange={(itemValue, itemIndex) =>
                    setPracticeArea(itemValue)
                  }
                >
                  <Picker.Item label="Selecione" value="" />
                  {areas.map((item) => (
                    <Picker.Item
                      key={item.id}
                      label={item.title}
                      value={item.title}
                    />
                  ))}
                </Picker>
              </View>

              <Text className="max-w-xs text-start font-raleway500 text-lg">
                Como podemos te ajudar?
              </Text>
              <TextInput
                className="flex flex-col items-end rounded-md border border-gray-300 p-4"
                multiline
                numberOfLines={8}
              />
              <Stack space={4}>
                <Text className="max-w-xs text-start font-raleway500 text-lg">
                  Tem preferencia por algum porfissional?
                </Text>
                <Input
                  _disabled={{
                    backgroundColor: "gray.200",
                  }}
                  isDisabled={hasProfPreference}
                />
                <Checkbox.Group
                  colorScheme="yellow"
                  className="flex flex-row items-center justify-start"
                  w={"100%"}
                  accessibilityLabel="Escolha um turno"
                  onChange={handleProfPreference}
                >
                  <Checkbox size="md" value="no" isChecked={hasProfPreference}>
                    Não
                  </Checkbox>
                </Checkbox.Group>
              </Stack>
            </VStack>

            <HStack space={4} margin={"auto"} my={"10"}>
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
              <Text className="text-start font-raleway500 text-xl">
                Selecione o dia para o pré agendamento.
              </Text>
            </VStack>

            {/* <Box className="m-4 rounded-md border border-gray-300 p-4">
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
            </Box> */}

            <View className="mx-4 mt-4">
              <Button
                title={`Abrir calendário - ${moment(selectedDate).format(
                  "DD/MM/YYYY"
                )}`}
                textSize={18}
                mb={1}
                onPress={showDatePicker}
              />
              <DateTimePickerModal
                accentColor="#ccc"
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirmDatePicker}
                onCancel={hideDatePicker}
              />
            </View>

            <VStack space={4} mx={4} pt={6}>
              <Text className="text-start font-raleway500 text-xl">
                {selectedDate
                  ? `Selecione o turno que estará livre no dia ${moment(
                      selectedDate
                    ).format("DD/MM/YYYY")}`
                  : "Selecione o turno que estará livre nesse dia."}
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
                    Sua lista de horários vazia
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
                          className="flex w-[94%] flex-row items-center justify-between space-x-3 
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
