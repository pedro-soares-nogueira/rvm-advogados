import moment from "moment";
import { HStack, Stack, Text, VStack } from "native-base";
import { X } from "phosphor-react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { deleteDate } from "../reducers/appointmentSlice";
import { useAppDispatch } from "../reducers/store";

interface DateCardProps {
  completeDate: string;
  color?: string;
  hasDelete?: boolean;
}

function formatPeriod(Period) {
  switch (Period) {
    case "manha":
      return "Manhã";
    case "tarde":
      return "Tarde";
    case "manha - tarde":
      return "Manhã - Tarde";
    default:
      return "Turno inválido";
  }
}

export const DateCard = ({
  completeDate,
  color = "#FFF0B6",
  hasDelete = true,
}: DateCardProps) => {
  const dispatch = useAppDispatch();

  const handleDelete = (completeDate: string) => {
    dispatch(deleteDate(completeDate));
  };

  const regex = /(\d{4}-\d{2}-\d{2}) \[([^\]]+)\]/;
  const matches = completeDate.match(regex);
  let date: string;
  date = matches[1];
  console.log(date);

  const formattedPeriod = formatPeriod(matches[2]);

  return (
    <VStack space={4} key={completeDate}>
      <Stack
        w={"80%"}
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 12,
          backgroundColor: color,
          borderRadius: 8,
          paddingVertical: 12,
        }}
      >
        <HStack space={3} alignItems={"center"}>
          <Text className="mb-1 text-xl font-semibold capitalize tracking-tight text-zinc-800">
            {moment(date, "YYYY-MM-DD").format("DD/MM/YYYY")}
          </Text>
          <Text className="text-4xl">•</Text>

          <Text className="mb-[8px] font-raleway500 text-xl capitalize tracking-tight text-zinc-800">
            {formattedPeriod}
          </Text>
        </HStack>
        {hasDelete && (
          <TouchableOpacity onPress={() => handleDelete(completeDate)}>
            <X size={20} color="#2E2E2E" />
          </TouchableOpacity>
        )}
        {!hasDelete && <></>}
      </Stack>
    </VStack>
  );
};
