import moment from "moment";
import { VStack, HStack, Box, Stack, Checkbox, Image, Text } from "native-base";
import { IdentificationCard, X } from "phosphor-react-native";
import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import { Button } from "../Button";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Input } from "../Input";

interface IShiftSchedule {
  shifts: string[] | [];
  selectedDate: string;
}

const shiftsToSelect = [
  {
    id: 1,
    title: "Manhã",
    time: "08:00:00",
  },
  {
    id: 2,
    title: "Tarde",
    time: "14:00:00",
  },
];

export const Step02 = () => {
  const [selectedDate, setSelectedDate] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [shifts, setShifts] = useState<string[] | []>([]);
  const [shiftSchedule, setShiftSchedule] = useState<IShiftSchedule[] | []>([]);

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
    setShifts([]);
  };
  const handleDeletShiftSchedule = (index: number) => {
    setShiftSchedule((prev) => prev.filter((_, i) => i !== index));
  };

  //   console.log(selectedDate);

  const handleCheckboxChange = (value) => {
    setShifts(value || []);
    console.log(shifts);
  };
  return (
    <>
      <VStack className="bg-white shadow-md shadow-gray-400">
        <VStack className="h-16"></VStack>
        <HStack className="flex w-full items-center justify-between p-4">
          <Image
            source={require("../../assets/horizontal_logo.png")}
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
          onChange={handleCheckboxChange}
        >
          {shiftsToSelect.map((item) => (
            <Checkbox key={item.id} size="lg" value={item.time} mr={10}>
              {item.title}
            </Checkbox>
          ))}
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
                <VStack space={4} key={index}>
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
        <Button title="Voltar" w={"45%"} textSize={18} variant={"outline"} />
        <Button
          title="Próximo"
          w={"45%"}
          textSize={18}
          onPress={() => console.log(2)}
        />
      </HStack>
    </>
  );
};
