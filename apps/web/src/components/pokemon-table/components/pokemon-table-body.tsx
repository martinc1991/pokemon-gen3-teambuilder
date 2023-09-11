import type { ClientInferResponseBody } from '@ts-rest/core';
import type { mainContract } from 'contract';
import { TableBody } from 'ui';
import { PokemonRow } from './pokemon-row';

type ContractPokemon = ClientInferResponseBody<typeof mainContract.pokemon.getAll, 200>;

interface PokemonTableProps {
  pokemon: ContractPokemon;
}

export default function PokemonTableBody(props: PokemonTableProps): JSX.Element {
  return (
    <TableBody>
      {props.pokemon.map((pkmn) => {
        return <PokemonRow key={pkmn.name} pokemon={pkmn} />;
      })}
    </TableBody>
  );
}
