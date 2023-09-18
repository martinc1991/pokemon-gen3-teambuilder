'use client';

import { createColumnHelper } from '@tanstack/react-table';
import { type IPokemonGetAllResponseElement } from 'contract';

export const columnHelper = createColumnHelper<IPokemonGetAllResponseElement>();
