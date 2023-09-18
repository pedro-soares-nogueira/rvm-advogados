import moment from "moment";
import {
  VStack,
  Box,
  Button as NativeBaseButton,
  Text,
  View,
  useToast,
  HStack,
} from "native-base";
import Icon from "react-native-vector-icons/AntDesign";
import React, { useState } from "react";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { Button } from "./Button";
import { z } from "zod";
import { Controller, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppDispatch, useAppSelector } from "../reducers/store";
import { addDate } from "../reducers/appointmentSlice";
import { DateCard } from "./DateCard";
import { CheckCircle } from "phosphor-react-native";

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
  // selectedShifts: z.array(z.string()),
});

type AppointmentInput = z.infer<typeof appointmentSchema>;

const DateTimePeriod = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [periods, setPeriods] = useState<string[] | []>([]);
  const [manha, setManha] = useState<boolean>(false);
  const [tarde, setTarde] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const toast = useToast();
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

  const onSubmit = async (data: AppointmentInput) => {
    const periodToDispatch = `${moment(data.selectedDate).format(
      "YYYY-MM-DD"
    )} [${manha ? "manha" : ""}${manha && tarde ? " - " : ""}${
      tarde ? "tarde" : ""
    }]`;

    // console.log(periodToDispatch);
    if (!manha && !tarde) {
      toast.show({
        title: "Selecione pelo menos um turno para confirmar o horário",
        placement: "top",
        bgColor: "red.500",
        size: "20",
        style: {
          marginTop: 30,
        },
      });
    } else {
      try {
        await dispatch(addDate(periodToDispatch));

        setManha(false);
        setTarde(false);
        setValue("selectedDate", new Date());
      } catch (error) {
        toast.show({
          title: "A data informada já foi adicionada! Tente outra data.",
          placement: "top",
          bgColor: "red.500",
          size: "20",
          style: {
            marginTop: 30,
          },
        });
      }
    }
  };

  const selectedDate = watch("selectedDate");
  // console.log(typeof selectedDate);

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
            selectedDate &&
            moment(selectedDate).subtract(1, "month").format("DD/MM/YYYY") !==
              moment(new Date()).subtract(1, "month").format("DD/MM/YYYY")
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
        {/* <Controller
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
        /> */}
        <HStack space={3} my={10}>
          <NativeBaseButton
            onPress={() => setManha(!manha)}
            borderWidth={2}
            backgroundColor={"transparent"}
            borderColor={manha ? "gray.700" : "gray.400"}
            py={4}
            rightIcon={
              manha ? (
                <Icon
                  name="checkcircleo"
                  size={18}
                  color={manha ? "#3f3f46" : "#a1a1aa"}
                  style={{ alignSelf: "center" }}
                />
              ) : (
                <Icon
                  name="closecircleo"
                  size={18}
                  color={manha ? "#3f3f46" : "#a1a1aa"}
                  style={{ alignSelf: "center" }}
                />
              )
            }
            w={"45%"}
          >
            <Text
              color={manha ? "gray.700" : "gray.400"}
              className="-mt-1 font-raleway700 text-xl"
            >
              Manhã
            </Text>
          </NativeBaseButton>
          <NativeBaseButton
            onPress={() => setTarde(!tarde)}
            borderWidth={2}
            backgroundColor={"transparent"}
            borderColor={tarde ? "gray.700" : "gray.400"}
            rightIcon={
              tarde ? (
                <Icon
                  name="checkcircleo"
                  size={18}
                  color={tarde ? "#3f3f46" : "#a1a1aa"}
                  style={{ alignSelf: "center" }}
                />
              ) : (
                <Icon
                  name="closecircleo"
                  size={18}
                  color={tarde ? "#3f3f46" : "#a1a1aa"}
                  style={{ alignSelf: "center" }}
                />
              )
            }
            w={"45%"}
          >
            <Text
              color={tarde ? "gray.700" : "gray.400"}
              className="-mt-1 font-raleway700 text-xl"
            >
              Tarde
            </Text>
          </NativeBaseButton>
        </HStack>
        <Button
          title="Adicionar horário à lista"
          textSize={20}
          mb={1}
          w={"60%"}
          disabled={selectedDate ? false : true}
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
