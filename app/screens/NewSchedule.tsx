import { Center, ScrollView, Text, VStack } from "native-base";
import React from "react";
import { Step01 } from "../components/steps/Step01";
import { Step02 } from "../components/steps/Step02";
import { useAppSelector } from "../reducers/store";
import { Step03 } from "../components/steps/Step03";
import { Step04 } from "../components/steps/Step04";
import { Button } from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../routes/app.routes";

export const NewSchedule = () => {
  const { user } = useAppSelector((state) => state.user);
  const { currentStep } = useAppSelector((store) => store.Appointment);
  const navigation = useNavigation<AppNavigatorRoutesProps>();

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      {user !== null ? (
        <VStack flex={1} background={"white"}>
          {currentStep === 0 && <Step01 />}

          {currentStep === 1 && <Step02 />}

          {currentStep === 2 && <Step03 />}

          {currentStep === 3 && <Step04 />}
        </VStack>
      ) : (
        <Center flex={1} bg={"white"} px={16}>
          <Text fontSize={"2xl"} mb={4} fontWeight={"bold"}>
            Você parece não estar logado
          </Text>
          <Text fontSize={"xl"} mb={4} textAlign={"center"}>
            Para realizar um pré-agendamento você precisa estar logado. Entre ou
            faça agora seu cadastro
          </Text>
          <Button
            fontSize={"md"}
            title="Entrar"
            onPress={() => {
              navigation.navigate("signIn");
            }}
          />
        </Center>
      )}
    </ScrollView>
  );
};
