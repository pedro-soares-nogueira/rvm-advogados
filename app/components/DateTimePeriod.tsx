import moment from "moment";
import { VStack, Box, Checkbox, Text, View } from "native-base";
import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Button } from "./Button";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "../reducers/store";
import { addDate } from "../reducers/appointmentSlice";
import { DateCard } from "./DateCard";

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

const DateTimePeriod = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [periods, setPeriods] = useState<string[] | []>([]);
  const dispatch = useAppDispatch();
  const { possible_dates } = useAppSelector((store) => store.Appointment);

  const {
    handleSubmit,
    control,
    setValue,
    reset,
    formState: { errors },
    watch,
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

  const onSubmit = (data: AppointmentInput) => {
    const possible_dates =
      moment(data.selectedDate).subtract(1, "month").format("YYYY-MM-DD") +
      " " +
      data.selectedShifts;

    const hasTwoPeriods = possible_dates?.includes(",");
    let periodToDispatch;

    if (hasTwoPeriods) {
      const [date, times] = possible_dates?.split(" ");
      const [periodOne, periodTwo] = times?.split(",");

      periodToDispatch = `${date} ["${periodOne}", "${periodTwo}"]`;
    } else {
      const [date, time] = possible_dates?.split(" ");
      periodToDispatch = `${date} ["${time}"]`;
    }

    dispatch(addDate(periodToDispatch));
  };

  const selectedDate = watch("selectedDate");

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
          title={
            selectedDate
              ? `Data selecionada ${moment(selectedDate)
                  .subtract(1, "month")
                  .format("DD/MM/YYYY")}`
              : "Abrir calendário"
          }
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

        <VStack space={4} mt={6}>
          {possible_dates.length !== 0 ? (
            possible_dates.map((item, index) => (
              <DateCard key={index} completeDate={item} />
            ))
          ) : (
            <Text className="mb-2 mt-3 font-raleway800 text-xl tracking-tight text-zinc-800">
              Sua lista de horários vazia
            </Text>
          )}
        </VStack>
      </Box>
    </Box>
  );
};

export default DateTimePeriod;

{
  /*   {moment(item.selectedDate).format("DD/MM/YYYY")} •{" "}
      {item.shifts.join(", ")} */
}
