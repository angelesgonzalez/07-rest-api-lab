import { CharacterEntityApi } from './character-collection.api-model';

interface CharacterListResponse {

  info: {
    count: number;
  };
  results: CharacterEntityApi[];

}

const apiUrl = `/api/character`;

export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(`There's been an error while fetching characters: ${response.status} `)
  }
  const data: CharacterListResponse = await response.json();

  return data.results;

};

