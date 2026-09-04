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
  const response = await fetch(`/api/character/${character.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(character) //fetch no serializa objetos automaticamente
  })
  return response.ok;
};

