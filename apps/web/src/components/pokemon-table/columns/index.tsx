'use client';

import { type ColumnDef } from '@tanstack/react-table';
import { type IPokemonGetAllResponseElement } from 'contract';
import { abilitiesColumn } from './abilitiesColumn';
import { actionsColumn } from './actionsColumn';
import { gendersColumn } from './gendersColumn';
import { heightColumn } from './heightColumn';
import { nameColumn } from './nameColumn';
import { nationalDexColumn } from './nationalDexColumn';
import { spriteColumn } from './spriteColumn';
import { statsColumn } from './statsColumn';
import { tierColumn } from './tierColumn';
import { typesColumn } from './typesColumn';
import { weightColumn } from './weightColumn';

const TABLE_COLUMNS: ColumnDef<IPokemonGetAllResponseElement>[] = [
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
