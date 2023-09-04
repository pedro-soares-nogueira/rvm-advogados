import moment from "moment";
import { VStack, Box, Checkbox, Stack, Text } from "native-base";
import { X } from "phosphor-react-native";
import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Button } from "./Button";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch } from "../reducers/store";
import { addDate } from "../reducers/appointmentSlice";

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

const appointmentSchema = z.object({
  selectedDate: z.date(),
  selectedShifts: z.array(z.string()),
});

type AppointmentInput = z.infer<typeof appointmentSchema>;

interface IAppointmentPeriod {
  selectedDate: string;
  periods: string[] | [];
}
const DateTimePeriod = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [periods, setPeriods] = useState<string[] | []>([]);
  const [periodAppointment, setPeriodAppointment] = useState<
    IAppointmentPeriod[] | []
  >([]);
  const dispatch = useAppDispatch();

  const {
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm<AppointmentInput>({
    resolver: zodResolver(appointmentSchema),
  });

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirmDatePicker = (date: Date) => {
    const appointmentInput: AppointmentInput = {
      selectedDate: date,
    };

    setValue("selectedDate", appointmentInput.selectedDate);
    hideDatePicker();
  };

  const handleDeletShiftSchedule = (index: number) => {
    setPeriodAppointment((prev) => prev.filter((_, i) => i !== index));
  };

  const onSubmit = (data: AppointmentInput) => {
    const possible_dates =
      moment(data.selectedDate).subtract(1, "month").format("YYYY-MM-DD") +
      " " +
      data.selectedShifts;

    dispatch(addDate(possible_dates));
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
          title={`Abrir calendário`}
          textSize={18}
          mb={1}
          onPress={showDatePicker}
        />
        <Controller
          control={control}
          name="selectedDate"
          defaultValue={undefined}
          render={({ field: { value } }) => (
            <DateTimePickerModal
              isVisible={isDatePickerVisible}
              mode="date"
              onConfirm={handleConfirmDatePicker}
              onCancel={hideDatePicker}
              date={value}
            />
          )}
        />
      </View>

      <VStack space={4} mx={4} pt={6}>
        <Text className="text-start font-raleway500 text-xl">
          Selecione o turno que estará livre nesse dia
        </Text>
      </VStack>

      <Box mx={4} w={"100%"}>
        <Controller
          control={control}
          name="selectedShifts"
          defaultValue={undefined}
          render={({ field: { value, onChange } }) => (
            <Checkbox.Group
              colorScheme="yellow"
              className="my-6 flex flex-row items-center justify-start"
              defaultValue={periods}
              w={"100%"}
              accessibilityLabel="Escolha um turno"
              onChange={onChange}
            >
              {periodToSelect.map((item) => (
                <Checkbox key={item.id} size="lg" value={item.time} mr={10}>
                  {item.title}
                </Checkbox>
              ))}
            </Checkbox.Group>
          )}
        />

        <Button
          title="Adicionar horário à lista"
          textSize={20}
          mb={1}
          w={"60%"}
          variant={"outline"}
          onPress={handleSubmit(onSubmit)}
        />

        {periodAppointment.length === 0 && (
          <>
            <Text className="mb-1 mt-6 font-raleway800 text-xl tracking-tight text-zinc-800">
              Sua lista de horários vazia
            </Text>
          </>
        )}
        {periodAppointment !== undefined && (
          <VStack space={4} mt={6}>
            {periodAppointment.map((item, index) => {
              return (
                <VStack space={4} key={index}>
                  <Stack
                    w={"80%"}
                    className="flex w-[94%] flex-row items-center justify-between space-x-3 
                                      rounded-md bg-[#FFF0B6] bg-opacity-40 p-4"
                  >
                    <Text className="text-xl font-bold capitalize tracking-tight text-zinc-800">
                      {/*   {moment(item.selectedDate).format("DD/MM/YYYY")} •{" "}
                      {item.shifts.join(", ")} */}
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
