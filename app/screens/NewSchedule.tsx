import { ScrollView, VStack } from "native-base";
import React from "react";
import { Step01 } from "../components/steps/Step01";
import { Step02 } from "../components/steps/Step02";
import { useAppSelector } from "../reducers/store";
import { Step03 } from "../components/steps/Step03";
import { Step04 } from "../components/steps/Step04";

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

  return (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <VStack flex={1} background={"white"}>
        {currentStep === 0 && <Step01 />}

        {currentStep === 1 && <Step02 />}

        {currentStep === 2 && <Step03 />}

        {currentStep === 3 && <Step04 />}
      </VStack>
    </ScrollView>
  );
};
