import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export interface IAreasDeAtuação {
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

export interface IAdvogados {
  id?: string;
  name?: string;
  cargo?: string;
  email?: string;
  photo?: string;
  areas_of_expertise?: string;
  languages?: string;
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
  isLoading: boolean;
}

const initialState: GeneralDetailsAPI = {
  details: null,
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
      state.isLoading = false;
    });
    builder.addCase(loadDetails.rejected, (state, action) => {
      state.isLoading = false;
    });
  },
});
