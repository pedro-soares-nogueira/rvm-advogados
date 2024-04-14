import {
  Box,
  Center,
  Button as ReactNativeButton,
  HStack,
  Image,
  ScrollView,
  Stack,
  Text,
  VStack,
  Flex,
} from "native-base";
import {
  Eye,
  EyeSlash,
  IdentificationCard,
  Phone,
  Plus,
  WhatsappLogo,
} from "phosphor-react-native";
import React, { useEffect, useState } from "react";
import { Linking, TouchableOpacity } from "react-native";
import { Input } from "../components/Input";
import { useAppDispatch, useAppSelector } from "../reducers/store";
import { Button } from "../components/Button";
import { useNavigation } from "@react-navigation/native";
import { AppNavigatorRoutesProps } from "../routes/app.routes";
import { useAuth } from "../contexts/authContext";
import { apiUranus } from "../lib/axios";
import { Controller, useForm } from "react-hook-form";
import md5 from "md5";
import axios from "axios";
import { loadAreas } from "../reducers/fetchSlice";
import { format } from "date-fns";

function aplicarMascaraCPFouCNPJ(numero) {
  const numeros = numero.replace(/\D/g, "");

  if (numeros.length === 11) {
    return numeros.replace(/^(\d{3})(\d{3})(\d{3})(\d{2})$/, "$1.$2.$3-$4");
  } else if (numeros.length === 14) {
    return numeros.replace(
      /^(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})$/,
      "$1.$2.$3/$4-$5"
    );
  } else {
    return numero;
  }
}

export const Profile = () => {
  const [show_passwords, setShow_passwords] = useState(false);
  const [schedulings, setSchedulings] = useState([]);

  const dispatch = useAppDispatch();
  const { areas } = useAppSelector((state) => state.fetcher);
  // const { user } = useAppSelector((state) => state.user);
  const { userToken } = useAuth();
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const navigation = useNavigation<AppNavigatorRoutesProps>();

  const handleHome = () => {
    navigation.navigate("home");
  };

  const handleChangePassword = async (pass_data: any) => {
    if (pass_data.password === pass_data.c_password) {
      const hashedPassword = md5(pass_data.password);

      const userToChange = {
        CpfCnpj: aplicarMascaraCPFouCNPJ(userToken),
        Senha: hashedPassword,
      };

      const data = await apiUranus.put(
        "/usuario?token=7bd15381-52b3-47b0-bdce-7ead4be7654a",
        userToChange
      );

      console.log(data.data);
    }
  };

  const handleShowPassword = () => {
    setShow_passwords(!show_passwords);
  };

  // API CALL
  const appointmentList = async () => {
    const url =
      "http://uranusapi.rvmadvogados.com.br/api/listaragendamentos?token=7bd15381-52b3-47b0-bdce-7ead4be7654a&cpfcnpj=01290202303";

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Erro ao carregar os dados");
        }
        return response.json();
      })
      .then((data) => {
        setSchedulings(data.Agendas);
      })
      .catch((error) => {
        console.error("Houve um problema com a sua solicitação:", error);
      });
  };

  // Chama função quando abre a tela
  useEffect(() => {
    dispatch(loadAreas());
    appointmentList();
  }, []);

  const handleWhatsApp = () => {
    const phoneNumber = "XXXXXXXXXXXX";
    const message = "Olá, esta é a mensagem que você deseja enviar";

    const url = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(
      message
    )}`;

    Linking.openURL(url);
  };
  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      {userToken !== null ? (
        <VStack flex={1} background={"white"}>
          <VStack className="bg-white shadow-md shadow-gray-400">
            <VStack className="h-16"></VStack>
            <HStack className="flex w-full items-center justify-between p-4">
              <TouchableOpacity onPress={() => handleHome()}>
                <Image
                  source={require("../assets/horizontal_logo.png")}
                  style={{ width: 250, height: 40 }}
                  alt={"Logo RVM"}
                />
                {/* <Main_logo width={200} /> */}
              </TouchableOpacity>
            </HStack>

            <VStack className="mx-4 my-6 space-y-2">
              <Text className="mb-3 font-raleway700 text-2xl text-zinc-800">
                Seu Perfil
              </Text>
              <Stack className="flex flex-row items-center">
                <Box className="mr-2">
                  <IdentificationCard size={30} color="#2E2E2E" />
                </Box>
                <Text className="mb-2.5 font-raleway600 text-xl text-zinc-800">
                  {userToken}
                </Text>
              </Stack>

              <Text className="mb-4 mr-2 font-raleway500 text-lg text-zinc-800">
                Aqui você pode ver seus agendamentos.
              </Text>
            </VStack>
          </VStack>

          <VStack space={4} mx={4} py={8}>
            <Text className="max-w-xl text-start font-raleway500 text-xl">
              Seus pré-agendamentos:
            </Text>

            <VStack mt={4} space={4}>
              {schedulings.map((scheduling) => {
                const area = areas.find(
                  (area) => area.Id === scheduling.IdArea
                );
                const turnosPorDia = [];

                const regex = /(\d{4}-\d{2}-\d{2})\s+\[(.*?)\]/g;
                let matches;

                while ((matches = regex.exec(scheduling.Turno)) !== null) {
                  const dia = matches[1];
                  const turnosStr = matches[2];

                  const turnosDoDia = turnosStr
                    .split("-")
                    .map((turno) => turno.trim());

                  turnosPorDia.push({ dia, turnos: turnosDoDia });
                }

                return (
                  <HStack
                    justifyContent={"space-between"}
                    alignItems={"center"}
                    key={scheduling.Id}
                    className="rounded-md border-y border-l-4 border-r border-y-gray-100 border-l-[#78620A] border-r-gray-100 p-4"
                  >
                    <Box>
                      <Text className="mb-3 text-lg font-bold">
                        {area.Nome}
                      </Text>
                      <Text className="mb-1">Possíveis datas</Text>
                      {turnosPorDia.map(({ dia, turnosDoDia }, index) => (
                        <Box key={index} className="">
                          <Text className="text-base">
                            {format(new Date(dia), "dd/MM/yyyy")}
                          </Text>
                          {turnosDoDia && turnosDoDia.length > 0 && (
                            <Text className="">
                              Turnos: {turnosDoDia.join(", ")}
                            </Text>
                          )}
                        </Box>
                      ))}
                    </Box>
                    <TouchableOpacity
                      onPress={() => handleWhatsApp()}
                      className="mr-10"
                    >
                      <WhatsappLogo size={34} color="#78620A" />
                    </TouchableOpacity>
                  </HStack>
                );
              })}
            </VStack>
          </VStack>
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
