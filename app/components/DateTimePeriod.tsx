import moment from "moment";
import { VStack, Box, Checkbox, Stack, Text, HStack } from "native-base";
import { X } from "phosphor-react-native";
import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Button } from "./Button";

const periodToSelect = [
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

interface IShiftSchedule {
  shifts: string[] | [];
  selectedDate: string;
}
const DateTimePeriod = () => {
  const [selectedDate, setSelectedDate] = useState();
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [shifts, setShifts] = useState<string[] | []>([]);
  const [periods, setPeriods] = useState<string[] | []>([]);
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
    //setShifts(value || []);
    setPeriods(value);
    console.log(periods);
  };
  return (
    <Box>
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
          {periodToSelect.map((item) => (
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
      </Box>
    </Box>
  );
};

export default DateTimePeriod;
