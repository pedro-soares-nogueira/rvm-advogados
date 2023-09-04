import { Picker } from "@react-native-picker/picker";
import { VStack, HStack, Box, Stack, Checkbox, Image, Text } from "native-base";
import { IdentificationCard } from "phosphor-react-native";
import React, { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { View, TextInput, StyleSheet } from "react-native";
import { Button } from "../Button";
import { useAppDispatch, useAppSelector } from "../../reducers/store";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "../Input";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { addDetails, nextStep } from "../../reducers/appointmentSlice";
import { Loading } from "../Loading";

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

const appointmentSchema = z.object({
  area_id: z.number().optional(),
  description: z.string().optional(),
  user_id: z.number().optional(),
});

type AppointmentInput = z.infer<typeof appointmentSchema>;

export const Step01 = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { details } = useAppSelector((state) => state.fetcher);
  const dispatch = useAppDispatch();
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const [areas, setAreas] = useState(details.areas_de_atuacao);
  const [lawyer, setLawyer] = useState(details.profissionais.advogados);

  const { handleSubmit, control, reset } = useForm<AppointmentInput>({
    resolver: zodResolver(appointmentSchema),
  });

  const handleHome = () => {
    navigation.navigate("home");
  };

  const handleData = (data: AppointmentInput) => {
    setIsLoading(true);

    dispatch(addDetails(data));
    dispatch(nextStep(1));
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
        <View style={styles.pickerContainer}>
          {!areas && <Loading />}
          {areas && (
            <Controller
              control={control}
              name="area_id"
              render={({ field: { onChange, value } }) => (
                <Picker
                  selectedValue={value}
                  onValueChange={(itemValue, itemIndex) => {
                    onChange(itemValue);
                  }}
                >
                  <Picker.Item label="Selecione" value="" />
                  {areas.map((item) => (
                    <Picker.Item
                      key={item.id}
                      label={item.name}
                      value={item.id}
                    />
                  ))}
                </Picker>
              )}
            />
          )}
        </View>

        <Text className="max-w-xs text-start font-raleway500 text-lg">
          Como podemos te ajudar?
        </Text>

        <Controller
          control={control}
          name="description"
          render={({ field: { onChange, value } }) => (
            <TextInput
              className="flex flex-col items-end rounded-md border border-gray-300 p-4"
              multiline
              numberOfLines={8}
              onChangeText={onChange}
            />
          )}
        />
        <Stack space={4}>
          <Text className="max-w-xs text-start font-raleway500 text-lg">
            Tem preferencia por algum porfissional?
          </Text>

          <View style={styles.pickerContainer}>
            <Controller
              control={control}
              name="user_id"
              render={({ field: { onChange, value } }) => (
                <Picker
                  selectedValue={value}
                  onValueChange={(itemValue) => {
                    onChange(itemValue);
                  }}
                >
                  <Picker.Item label="Não" value="" />
                  {Object.values(lawyer).map((item) => (
                    <Picker.Item
                      key={item.id}
                      label={item.name}
                      value={item.id}
                    />
                  ))}
                </Picker>
              )}
            />
          </View>

          {/*  <Controller
            control={control}
            name="user_id"
            render={({ field: { onChange } }) => (
              <Input
                _disabled={{
                  backgroundColor: "gray.200",
                }}
                onChangeText={onChange}
              />
            )}
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
          </Checkbox.Group> */}
        </Stack>
      </VStack>

      <HStack space={4} margin={"auto"} my={"10"}>
        <Button
          title="Voltar"
          w={"45%"}
          variant={"outline"}
          onPress={() => handleHome()}
        />
        <Button
          title="Próximo"
          w={"45%"}
          onPress={handleSubmit(handleData)}
          isLoading={isLoading}
        />
      </HStack>
    </>
  );
};
