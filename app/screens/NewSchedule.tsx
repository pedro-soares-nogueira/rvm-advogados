import {
  Box,
  Center,
  Checkbox,
  Divider,
  HStack,
  Heading,
  Icon,
  Image,
  Input,
  Modal,
  ScrollView,
  Select,
  Stack,
  Text,
  VStack,
  Button,
} from "native-base";
import {
  IdentificationCard,
  Phone,
  WhatsappLogo,
  Plus,
  ArrowRight,
} from "phosphor-react-native";
import React, { useState } from "react";
import { ScheduleCard } from "../components/ScheduleCard";
import { AntDesign } from "@expo/vector-icons";

const practiceAreaDetails = [
  { id: 1, icon: "shield-check", title: "Previdenciário" },
  { id: 2, icon: "credit-card", title: "Tributário" },
  { id: 3, icon: "webhook", title: "Trabalhista" },
  { id: 4, icon: "star", title: "Cívil" },
  { id: 5, icon: "versions", title: "Administrativo" },
  { id: 6, icon: "sort-asc", title: "Digital" },
  { id: 7, icon: "stack", title: "Transito" },
];

export const NewSchedule = () => {
  const [areas, setAreas] = useState(practiceAreaDetails);
  const [ableTo, setAbleTo] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const setModalOpen = () => {
    setShowModal(!showModal);
  };

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} background={"white"}>
        <VStack className="bg-white shadow-md shadow-gray-400">
          <VStack className="h-16"></VStack>
          <HStack className="flex w-full items-center justify-between p-4">
            <Image
              source={require("../assets/horizontal_logo.png")}
              style={{ width: 250, height: 40 }}
              alt={"Logo RVM"}
            />
            {/* <Main_logo width={200} /> */}
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
                <Box className="h-3 w-32 rounded-full bg-amber-300"></Box>
              </Stack>
              <Stack className="flex-col items-start justify-start gap-0.5">
                <Text className="mb-2 font-raleway700 text-xl text-zinc-800">
                  Passo 02
                </Text>
                <Box className="h-3 w-32 rounded-full bg-gray-300"></Box>
              </Stack>
            </HStack>
          </VStack>
        </VStack>
        <VStack space={4} mx={4} py={8}>
          <>
            <Button
              onPress={setModalOpen}
              rightIcon={
                <Icon
                  as={AntDesign}
                  name="caretdown"
                  color="gray.300"
                  size={6}
                />
              }
              bg="white"
              w="full"
              fontSize={"md"}
              borderWidth={"1"}
              borderColor={"gray.300"}
              className="h-14"
              _focus={{
                bg: "white",
                borderWidth: 1,
                borderColor: "gray.400",
              }}
            />
            <Modal
              isOpen={showModal}
              onClose={() => setShowModal(false)}
              justifyContent="flex-end"
              size="full"
            >
              <Modal.Content>
                <Modal.CloseButton />
                <Modal.Header>
                  <Text className="font-raleway600 text-2xl text-zinc-800">
                    Áreas de atuação
                  </Text>
                </Modal.Header>
                <Modal.Body>
                  {areas.map((item) => (
                    <VStack
                      my={2}
                      py={2}
                      borderBottomWidth={2}
                      borderBottomColor={"gray.500"}
                      key={item.id}
                    >
                      <Text className="font-raleway500 text-lg text-zinc-800">
                        {item.title}
                      </Text>
                    </VStack>
                  ))}
                </Modal.Body>
                <Modal.Footer>
                  <Button
                    onPress={setModalOpen}
                    px={10}
                    mr={2}
                    variant={"outline"}
                  >
                    Sair
                  </Button>
                  <Button onPress={setModalOpen} px={10}>
                    Continar
                  </Button>
                </Modal.Footer>
              </Modal.Content>
            </Modal>
          </>
        </VStack>
      </VStack>
    </ScrollView>
  );
};
