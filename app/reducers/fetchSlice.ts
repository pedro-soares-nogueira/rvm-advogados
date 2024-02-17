import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { apiUranus } from "../lib/axios";

export interface IAreasDeAtuação {
  id?: string;
  Nome?: string;
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

export interface IAdvogados {
  id?: number;
  name?: string;
  // cargo?: string;
  // email?: string;
  // photo?: string;
  // areas_of_expertise?: string[];
  // languages?: string[];
}

export interface ILawyers {
  Profissionais: { Id: number; Nome: string }[];
}

export interface IAreas {
  Id: number;
  Nome: string;
}

export interface IAdreess {
  id?: string;
  title?: string;
  fone_1?: string;
  fone_2?: string;
  email?: string;
}

interface GeneralDetailsAPIType {
  enderecos: IAdreess[];
  profissionais: {
    advogados: IAdvogados[];
    outros: Array<{
      id?: string;
      name?: string;
      cargo?: string;
      email?: string;
      photo?: string;
      areas_of_expertise?: string;
      languages?: string;
    }>;
  };
  areas_de_atuacao: Array<IAreasDeAtuação>;
  quem_somos: { sobre: string };
}

interface GeneralDetailsAPI {
  details: GeneralDetailsAPIType | null;
  areas: Array<IAreas>;
  advogados: IAdvogados[];
  lawyers: ILawyers;
  isLoading: boolean;
}

const initialState: GeneralDetailsAPI = {
  details: null,
  areas: null,
  advogados: null,
  lawyers: null,
  isLoading: true,
};

export const loadDetails = createAsyncThunk(
  "FetchDetails/fetchAll",
  async () => {
    const response = await fetch("https://rvmadvogados.com.br/api/public");
    const jsonData = await response.json();
    return jsonData;
  }
);

export const loadAreas = createAsyncThunk(
  "FetchDetails/loadAreas",
  async () => {
    const response = await fetch(
      "http://uranusapi.rvmadvogados.com.br/api/consultaareas?token=7bd15381-52b3-47b0-bdce-7ead4be7654a"
    );
    const jsonData = await response.json();
    return jsonData;
  }
);

export const loadLawyers = createAsyncThunk(
  "FetchDetails/loadAllLawyers",
  async () => {
    const response = await apiUranus.post(
      "/consultaprofissionaisarea?token=7bd15381-52b3-47b0-bdce-7ead4be7654a",
      {
        IdArea: 2,
      }
    );

    return response.data;
  }
);

export const fetchDetailsSlice = createSlice({
  name: "FetchDetails",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(loadDetails.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loadDetails.fulfilled, (state, action) => {
      state.details = action.payload;
      state.advogados = action.payload.profissionais.advogados;
      state.isLoading = false;
    });
    builder.addCase(loadDetails.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(loadAreas.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(loadAreas.fulfilled, (state, action) => {
      state.areas = action.payload.Areas;
      state.isLoading = false;
    });
    builder.addCase(loadAreas.rejected, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(loadLawyers.pending, (state, action) => {});
    builder.addCase(loadLawyers.fulfilled, (state, action) => {
      state.lawyers = action.payload;
    });
    builder.addCase(loadLawyers.rejected, (state, action) => {});
  },
});
