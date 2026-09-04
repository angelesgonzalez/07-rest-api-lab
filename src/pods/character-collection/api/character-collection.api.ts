import { CharacterEntityApi } from './character-collection.api-model';

interface CharacterListResponse {

  info: {
    count: number;
    pages: number;
  };
  results: CharacterEntityApi[];

}

interface CharacterCollectionResult {
  results: CharacterEntityApi[];
  pages: number;
}

const apiUrl = `/api/character`;

export const getCharacterCollection = async (page: number = 1): Promise<CharacterCollectionResult> => {
  const response = await fetch(`${apiUrl}?page=${page}`);

  if (!response.ok) {
    throw new Error(`There's been an error while fetching characters: ${response.status} `)
  }
  const data: CharacterListResponse = await response.json();

  return {
    results: data.results,
    pages: data.info.pages,
  }

};

