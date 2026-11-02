import axios from "axios";
import type { CharacterNameResponse } from "../types/character";

export const fetchCharacter = async (
  name: string,
  page: number,
): Promise<CharacterNameResponse> => {
  const response = await axios.get<CharacterNameResponse>(
    "https://rickandmortyapi.com/api/character",
    { params: { name, page } },
  );
  return response.data;
};
