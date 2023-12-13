'use client';

import { createColumnHelper } from '@tanstack/react-table';
import { type PokemonWithAbilities } from 'contract';

export const columnHelper = createColumnHelper<PokemonWithAbilities>();
