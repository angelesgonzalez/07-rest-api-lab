import { Character } from './character.api-model';




export const getCharacter = async (id: string): Promise<Character> => {

  const apiUrl = `https://rickandmortyapi.com/api/character/${id}`;

  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(`There's been an error while fetching a character ${response.status}`)
  }

  return response.json()





};

