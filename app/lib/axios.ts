import axios from "axios";

export const api = axios.create({
  baseURL: "https://rvmadvogados.com.br/api",
});

export const apiUranus = axios.create({
  baseURL: "http://uranusapi.rvmadvogados.com.br/api",
});
