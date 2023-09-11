'use client';

import type { IPokemonGetAllResponse } from 'contract';
import { Table, TableCaption } from 'ui';
import PokemonTableBody from './components/pokemon-table-body';
import PokemonTableHeader from './components/pokemon-table-header';

interface PokemonTableProps {
  pokemon: IPokemonGetAllResponse;
}

export default function PokemonTable(props: PokemonTableProps): JSX.Element {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
      <PokemonTableHeader />
      <PokemonTableBody pokemon={props.pokemon} />
    </Table>
  );
}
