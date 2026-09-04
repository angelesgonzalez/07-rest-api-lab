import { Character } from './character.api-model';


export const getCharacter = async (id: string): Promise<Character> => {

  const apiUrl = `/api/character/${id}`;

  const response = await fetch(apiUrl);

  if (!response.ok) {
    throw new Error(`There's been an error while fetching a character ${response.status}`)
  }

  return response.json();


};


export const saveCharacter = async (character: Character): Promise<boolean> => {
  console.warn('saveCharacter not implemented yet — Ejercicio 2');
  return false;
};

