import moment from "moment";
import { HStack, Stack, Text, VStack } from "native-base";
import { X } from "phosphor-react-native";
import React from "react";
import { TouchableOpacity } from "react-native";
import { deleteDate } from "../reducers/appointmentSlice";
import { useAppDispatch } from "../reducers/store";

export const DateCard = ({
  completeDate,
  color = "#FFF0B6",
  hasDelete = true,
}: {
  completeDate: string;
  color?: string;
  hasDelete?: boolean;
}) => {
  const dispatch = useAppDispatch();

  const handleDelete = (completeDate: string) => {
    dispatch(deleteDate(completeDate));
  };

  const regex = /(\d{4}-\d{2}-\d{2}) \[([^\]]+)\]/;
  const matches = completeDate.match(regex);
  let date: string;
  let times: string[];

  if (matches) {
    date = matches[1];
    times = matches[2].split(", ").map((time) => time.replace(/['"]/g, ""));
  } else {
    console.log("String não corresponde ao formato esperado.");
  }

  return (
    <VStack space={4} key={completeDate}>
      <Stack
        w={"80%"}
        className={`flex w-[94%] flex-row items-center justify-between space-x-3 
        rounded-md bg-[${color}] bg-opacity-40 p-4`}
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
