'use client';

import { createColumnHelper, type ColumnDef } from '@tanstack/react-table';
import type { IPokemonGetAllResponseElement } from 'contract';
import { GendersText, PokemonIcon, TypeBadge, Typography } from 'ui';
import { formatPokemonName, getTierText } from '../../../utils/pokemon';
import { TableRowStats } from '../../stats/tableRowStats';
import RowDropdownMenu from './dropdown-menu';

const columnHelper = createColumnHelper<IPokemonGetAllResponseElement>();

const nationalDexColumn: ColumnDef<IPokemonGetAllResponseElement> = columnHelper.accessor('nationalPokedexNumber', {
  id: 'nationalPokedexNumber',
  header: '#',
  cell: ({ row }) => <div className='capitalize'>{row.getValue('nationalPokedexNumber')}</div>,
});

const tierColumn: ColumnDef<IPokemonGetAllResponseElement> = columnHelper.accessor('tier', {
  id: 'tier',
  header: 'Tier',
  cell: ({ row }) => <Typography.P>{getTierText(row.getValue('tier'))}</Typography.P>,
});

const nameColumn: ColumnDef<IPokemonGetAllResponseElement> = columnHelper.accessor('name', {
  id: 'name',
  header: () => {
    return <div>Name</div>;
  },
  cell: ({ row }) => <Typography.P>{formatPokemonName(row.getValue('name'))}</Typography.P>,
});

const spriteColumn: ColumnDef<IPokemonGetAllResponseElement> = columnHelper.accessor((row) => row.nationalPokedexNumber, {
  id: 'sprite',
  header: () => {
    return <div />;
  },
  cell: (info) => (
    <div>
      <PokemonIcon inputId={info.getValue()} name={info.row.getValue('name')} priority quality={10} />
    </div>
  ),
});

const typesColumn: ColumnDef<IPokemonGetAllResponseElement> = columnHelper.accessor((row) => [row.typeOneName, row.typeTwoName], {
  id: 'types',
  header: () => {
    return <div>Type</div>;
  },
  cell: (info) => {
    const [typeOne, typeTwo] = info.getValue();
    return (
      <div className='flex flex-row justify-center gap-3'>
        <TypeBadge type={typeOne} />
        {typeTwo !== 'empty' && <TypeBadge type={typeTwo} />}
      </div>
    );
  },
});

const statsColumn: ColumnDef<IPokemonGetAllResponseElement> = columnHelper.accessor(
  ({ baseHp, baseAttack, baseDefense, baseSpattack, baseSpdefense, baseSpeed }) => ({
    baseHp,
    baseAttack,
    baseDefense,
    baseSpattack,
    baseSpdefense,
    baseSpeed,
  }),
  {
    id: 'stats',
    header: () => {
      return <div>Base Stats</div>;
    },
    cell: (info) => {
      const s = info.getValue();
      const stats = {
        hp: s.baseHp,
        attack: s.baseAttack,
        defense: s.baseDefense,
        spattack: s.baseSpattack,
        spdefense: s.baseSpdefense,
        speed: s.baseSpeed,
      };
      return <TableRowStats stats={stats} />;
    },
  }
);

const gendersColumn: ColumnDef<IPokemonGetAllResponseElement> = columnHelper.accessor((row) => row.genders, {
  id: 'genders',
  header: () => {
    return <div>Genders</div>;
  },
  cell: (info) => (
    <div className='flex justify-center'>
      <GendersText genders={info.getValue()} />
    </div>
  ),
});

const heightColumn: ColumnDef<IPokemonGetAllResponseElement> = columnHelper.accessor((row) => row.height / 10, {
  id: 'height',
  header: () => {
    return <div>Height</div>;
  },
  cell: (info) => (
    <div className='flex justify-center gap-1'>
      <Typography.Small>{info.getValue().toFixed(1)}</Typography.Small>
      <Typography.Muted>m</Typography.Muted>
    </div>
  ),
});

const weightColumn: ColumnDef<IPokemonGetAllResponseElement> = columnHelper.accessor((row) => row.weight / 10, {
  id: 'weight',
  header: () => {
    return <div>Weight</div>;
  },
  cell: (info) => (
    <div className='flex justify-center gap-1'>
      <Typography.Small>{info.getValue().toFixed(1)}</Typography.Small>
      <Typography.Muted>kg</Typography.Muted>
    </div>
  ),
});

const actionsColumn: ColumnDef<IPokemonGetAllResponseElement> = columnHelper.accessor((row) => row, {
  id: 'actions',
  enableHiding: false,
  header: () => <div />,
  cell: (info) => {
    return <RowDropdownMenu pokemon={info.cell.getValue()} />;
  },
});

export const columns: ColumnDef<IPokemonGetAllResponseElement>[] = [
  nationalDexColumn,
  tierColumn,
  nameColumn,
  spriteColumn,
  typesColumn,
  statsColumn,
  gendersColumn,
  heightColumn,
  weightColumn,
  actionsColumn,
];
