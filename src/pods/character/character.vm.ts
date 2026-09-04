export interface Character {
  id: string;
  picture: string,
  name: string;
  status: string,
  species: string,
  gender: string,
  bestSentence?: string,
}


export const createEmptyCharacter = (): Character => ({
  id: '',
  picture: '',
  name: '',
  status: '',
  species: '',
  gender: '',
  bestSentence: '',
});
