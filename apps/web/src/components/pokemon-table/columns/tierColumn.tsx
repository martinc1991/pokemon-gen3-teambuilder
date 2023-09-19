import { type ColumnDef } from '@tanstack/react-table';
import { sortedTiers, type IPokemonGetAllResponseElement } from 'contract';
import { Typography } from 'ui';
import { getTierText } from '../../../utils/pokemon';
import { columnHelper } from './getColumnHelper';

export const tierColumn: ColumnDef<IPokemonGetAllResponseElement> = columnHelper.accessor('tier', {
  id: 'tier',
  header: () => <div>Tier</div>,
  cell: (info) => <Typography.Small>{getTierText(info.getValue())}</Typography.Small>,
  sortingFn: (rowA, rowB) => sortedTiers.indexOf(rowA.getValue('tier')) - sortedTiers.indexOf(rowB.getValue('tier')),
});
