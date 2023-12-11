import { z } from 'zod';

export const MoveTargetSchema = z.enum([
  'selectedPokemon',
  'user',
  'allOpponents',
  'userAndAllies',
  'specificMove',
  'allOtherPokemon',
  'entireField',
  'ally',
  'usersField',
  'randomOpponent',
  'allPokemon',
  'opponentsField',
]);

export type MoveTargetType = `${z.infer<typeof MoveTargetSchema>}`;

export default MoveTargetSchema;
