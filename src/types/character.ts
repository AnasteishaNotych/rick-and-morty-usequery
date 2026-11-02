export interface Character {
  id: number;
  name: string;
  status: string;
  image: string;
}

interface CharacterNameResponseInfo {
  count: number;
  pages: number;
  next: string;
  prev: null;
}

export interface CharacterNameResponse {
  info: CharacterNameResponseInfo;
  results: [];
}
