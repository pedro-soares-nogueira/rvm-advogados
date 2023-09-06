import { VStack, HStack, Box, Stack, Image, Text } from "native-base";
import { CheckCircle, Phone } from "phosphor-react-native";
import React from "react";
import { Button } from "../Button";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../../routes/app.routes";
import { useAppSelector } from "../../reducers/store";
import { DateCard } from "../DateCard";

export const Step04 = () => {
  const navigation = useNavigation<AppNavigatorRoutesProps>();
  const { possible_dates, area_id, description } = useAppSelector(
    (store) => store.Appointment
  );

  const handleHome = () => {
    navigation.navigate("home");
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
          Nós entraremos em contato para confirmação do horário. Fique atento!
        </Text>
        {/* #D3FFCF */}
        <VStack space={4} mt={6}>
          {possible_dates ? (
            possible_dates.map((item, index) => (
              <DateCard color="#D3FFCF" key={index} completeDate={item} />
            ))
          ) : (
            <Text className="mb-1 font-raleway800 text-xl tracking-tight text-zinc-800">
              Sua lista de horários vazia
            </Text>
          )}
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
  );
};
