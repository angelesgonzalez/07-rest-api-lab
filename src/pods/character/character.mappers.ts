import * as apiModel from './api/character.api-model';
import * as viewModel from './character.vm';


export const mapCharacterFromApiToVm = (
  character: apiModel.Character
): viewModel.Character => ({
  id: String(character.id),
  picture: character.image,
  name: character.name,
  status: character.status,
  species: character.species,
  gender: character.gender,
  bestSentence: character.bestSentence,
});

export const mapCharacterFromVmToApi = (
  character: viewModel.Character
): apiModel.Character => ({
  id: Number(character.id),
  name: character.name,
  status: character.status,
  species: character.species,
  gender: character.gender,
  bestSentence: character.bestSentence,
} as apiModel.Character);
