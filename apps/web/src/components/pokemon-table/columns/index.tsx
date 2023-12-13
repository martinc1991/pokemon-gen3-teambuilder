'use client';

import { type ColumnDef } from '@tanstack/react-table';
import { type PokemonWithAbilities } from 'contract';
import { abilitiesColumn } from './abilities-column';
import { actionsColumn } from './actions-column';
import { gendersColumn } from './genders-column';
import { heightColumn } from './height-column';
import { nameColumn } from './name-column';
import { nationalDexColumn } from './national-dex-column';
import { spriteColumn } from './sprite-column';
import { statsColumn } from './stats-column';
import { tierColumn } from './tier-column';
import { typesColumn } from './types-column';
import { weightColumn } from './weight-column';

const TABLE_COLUMNS: ColumnDef<PokemonWithAbilities>[] = [
  nationalDexColumn,
  tierColumn,
  nameColumn,
  spriteColumn,
  typesColumn,
  statsColumn,
  abilitiesColumn,
  gendersColumn,
  heightColumn,
  weightColumn,
  actionsColumn,
];

export default TABLE_COLUMNS;
