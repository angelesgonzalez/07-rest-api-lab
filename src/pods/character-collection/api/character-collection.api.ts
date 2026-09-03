import { CharacterEntityApi } from './character-collection.api-model';

interface CharacterListResponse {

  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: CharacterEntityApi[];

}


export const getCharacterCollection = async (): Promise<
  CharacterEntityApi[]
> => {
  const response = await fetch('https://rickandmortyapi.com/api/character');

  if (!response.ok) {
    throw new Error(`There's been an error while fetching characters: ${response.status} `)
  }
  const data: CharacterListResponse = await response.json();

  return data.results;

};

