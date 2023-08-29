import { Stack, Text } from "native-base";
import React, { useEffect, useState } from "react";

interface IAdvogado {
  id: number;
  name: string;
  cargo: string;
  email: string;
  photo: string;
  areas_of_expertise: string[];
  languages: string[];
}

interface IAreasDeAtuação {
  id?: string;
  name?: string;
  resume?: string;
  thumb?: string;
  order?: string;
  active?: string;
  link?: string;
  descricao?: string;
  destaque_chamada?: string;
  frase_contato?: string;
  destaque_items?: string;
  deleted_at?: string;
  created_at?: string;
  updated_at?: string;
  texto_4?: string;
  texto_3?: string;
  texto_2?: string;
  texto_1?: string;
  resume2?: string;
}

export const OurTeam = () => {
  const [advogados, setAdvogados] = useState<IAdvogado[] | undefined>([]);
  const [areas_de_atuacao, setAreas_de_atuacao] = useState<
    IAreasDeAtuação[] | undefined
  >([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://rvmadvogados.com.br/api/public");
        const jsonData = await response.json();
        setAdvogados(jsonData.profissionais.advogados);
        setAreas_de_atuacao(jsonData.areas_de_atuacao);
      } catch (error) {
        console.error("Erro ao buscar os dados:", error);
      }
    };

    fetchData();
  }, []);

  // console.log(advogados);
  // console.log(areas_de_atuacao);

  return (
    <Stack>
      {/* {advogados &&
        advogados.map((item) => <Text key={item.id}>{item.id}</Text>)} */}

      {/*  {areas_de_atuacao &&
        areas_de_atuacao.map((item) => <Text key={item.id}>{item.id}</Text>)} */}
    </Stack>
  );
};
