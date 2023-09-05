import {
  Box,
  HStack,
  Image,
  ScrollView,
  Stack,
  Text,
  VStack,
} from "native-base";
import { Phone, X, Warning, CheckCircle } from "phosphor-react-native";
import React from "react";
import { Button } from "../components/Button";
import { TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../routes/app.routes";
import { Step01 } from "../components/steps/Step01";
import { Step02 } from "../components/steps/Step02";
import { useAppSelector } from "../reducers/store";
import { Step03 } from "../components/steps/Step03";

/* const practiceAreaDetails = [
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

const customDayNames = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"]; */

/* const appointmentSchema = z.object({
  areaOfExpertise: z.string().optional(),
  howCanWeHelp: z.string().optional(),
  professional: z.string().optional(),
});

type AppointmentInput = z.infer<typeof appointmentSchema>; */

export const NewSchedule = () => {
  const { currentStep } = useAppSelector((store) => store.Appointment);

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handleHome = () => {
    navigation.navigate("home");
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} background={"white"}>
        {currentStep === 0 && <Step01 />}

        {currentStep === 1 && <Step02 />}

        {currentStep === 2 && <Step03 />}

        {currentStep === 3 && (
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
