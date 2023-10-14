import { type ColumnDef } from '@tanstack/react-table';
import { type IPokemonGetAllResponseElement } from 'contract';
import { SORTED_TIERS } from 'pokemon-info';
import { Typography } from 'ui';
import { getTierText } from '../../../utils/pokemon';
import { columnHelper } from './get-column-helper';

export const tierColumn: ColumnDef<IPokemonGetAllResponseElement> = columnHelper.accessor('tier', {
  id: 'tier',
  header: () => <div>Tier</div>,
  cell: (info) => <Typography.Small>{getTierText(info.getValue())}</Typography.Small>,
  sortingFn: (rowA, rowB) => SORTED_TIERS.indexOf(rowA.getValue('tier')) - SORTED_TIERS.indexOf(rowB.getValue('tier')),
});
