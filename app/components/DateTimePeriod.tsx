import moment from "moment";
import {
  VStack,
  Box,
  Checkbox,
  Stack,
  Text,
  Divider,
  Flex,
  HStack,
} from "native-base";
import { X } from "phosphor-react-native";
import React, { useState } from "react";
import { View, TouchableOpacity } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Button } from "./Button";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "../reducers/store";
import { addDate, deleteDate } from "../reducers/appointmentSlice";
import { format, parseISO } from "date-fns";
import { ptBR } from "date-fns/locale";

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

  const handleDelete = (item: string) => {
    dispatch(deleteDate(item));
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

        <VStack space={4} mt={6}>
          {possible_dates ? (
            possible_dates.map((item, index) => {
              const regex = /(\d{4}-\d{2}-\d{2}) \[([^\]]+)\]/;
              const matches = item.match(regex);
              let date: string;
              let times: string[];

              if (matches) {
                date = matches[1];
                times = matches[2]
                  .split(", ")
                  .map((time) => time.replace(/['"]/g, ""));
              } else {
                console.log("String não corresponde ao formato esperado.");
              }

              return (
                <VStack space={4} key={index}>
                  <Stack
                    w={"80%"}
                    className="flex w-[94%] flex-row items-center justify-between space-x-3 
                  rounded-md bg-[#FFF0B6] bg-opacity-40 p-4"
                  >
                    <HStack space={3} alignItems={"center"}>
                      <Text className="mb-1 text-xl font-semibold capitalize tracking-tight text-zinc-800">
                        {moment(date, "YYYY-MM-DD").format("DD/MM/YYYY")}
                      </Text>
                      <Text className="text-4xl">•</Text>
                      {times.map((item, index) => {
                        const hora = parseInt(item.split(":")[0]);
                        if (hora >= 8 && hora < 12) {
                          return (
                            <Text
                              key={index}
                              className="mb-[8px] font-raleway500 text-xl capitalize tracking-tight text-zinc-800"
                            >
                              Manhã
                            </Text>
                          );
                        } else if (hora >= 12 && hora < 18) {
                          return (
                            <Text
                              key={index}
                              className="mb-[8px] font-raleway500 text-xl capitalize tracking-tight text-zinc-800"
                            >
                              Tarde
                            </Text>
                          );
                        }
                      })}
                    </HStack>
                    <TouchableOpacity onPress={() => handleDelete(item)}>
                      <X size={20} color="#2E2E2E" />
                    </TouchableOpacity>
                  </Stack>
                </VStack>
              );
            })
          ) : (
            <Text className="mb-1 font-raleway800 text-xl tracking-tight text-zinc-800">
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
