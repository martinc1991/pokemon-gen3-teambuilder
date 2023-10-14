import { MoveTarget, TypeNames } from 'contract';
import { MoveClient } from 'pokenode-ts';
import { kebabToCamelCase } from '../helpers/common';
import { Seed_Move, getMoveDamageClass, getMoveName } from '../helpers/pokemon';
import { MOVES_NAMES } from './moves-names';

const movesApi = new MoveClient();

export async function getMovesPromises(): Promise<Seed_Move[]> {
  try {
    const promises = MOVES_NAMES.map((move) => {
      return movesApi.getMoveByName(move);
    });

    const results = await Promise.all(promises);

    const moves: Seed_Move[] = results.map((move) => {
      return {
        accuracy: move.accuracy ?? 0,
        damageClass: getMoveDamageClass(move),
        name: getMoveName(move.name),
        description: move.effect_entries[0].short_effect.replace('$effect_chance', `${move.effect_chance}`),
        power: move.power ?? 0, // INFO: 0 means it has no power (status move or something like low-kick or counter)
        pp: move.pp,
        target: kebabToCamelCase(move.target.name) as MoveTarget,
        type: move.type.name === 'fairy' ? TypeNames.normal : (move.type.name as TypeNames), // INFO: only 3: https://bulbapedia.bulbagarden.net/wiki/List_of_modified_moves#Generation_IV_to_Generation_V_4
      };
    });

    return moves;
  } catch (error) {
    console.log(error);
  }
}
