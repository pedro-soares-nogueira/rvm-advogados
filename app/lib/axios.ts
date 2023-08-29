import axios from "axios";

export const api = axios.create({
  baseURL: "https://rvmadvogados.com.br/api",
});
