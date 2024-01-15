import { prismaSeederClient } from './seederClient';

export async function isDbSeeded() {
  const [abilitiesCount, itemCount, moveCount, natureCount, pokemonCount, typeCount, teamCount] = await Promise.all([
    prismaSeederClient.ability.count(),
    prismaSeederClient.item.count(),
    prismaSeederClient.move.count(),
    prismaSeederClient.nature.count(),
    prismaSeederClient.pokemon.count(),
    prismaSeederClient.type.count(),
    prismaSeederClient.team.count(),
  ]);

  return (
    abilitiesCount === 76 &&
    itemCount === 103 &&
    moveCount === 353 &&
    natureCount === 25 &&
    pokemonCount === 389 &&
    typeCount === 18 &&
    teamCount === 5
  );
}
