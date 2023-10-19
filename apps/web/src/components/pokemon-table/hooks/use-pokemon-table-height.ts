import { useWindowSize } from 'usehooks-ts';
import { PAGE_HEADER_HEIGHT } from '../../page-header';
import { TABLE_HEADER_HEIGHT } from '../components/table-header';
import { TABLE_ROW_HEIGHT } from '../components/table-rows';
import { TABLE_FILTERS_HEIGHT } from '../filters';

const TAILWIND_GAP_4 = 16;

export function usePokemonTableHeight(RENDERED_ROWS_NUM: number): number {
  const { height } = useWindowSize();
  const MAX_TABLE_HEIGHT = height - PAGE_HEADER_HEIGHT - TABLE_FILTERS_HEIGHT - TAILWIND_GAP_4 - 20;

  const ONLY_RENDERED_ELEMENTS_HEIGHT = RENDERED_ROWS_NUM * TABLE_ROW_HEIGHT;
  const TABLE_HEIGHT_CALC =
    ONLY_RENDERED_ELEMENTS_HEIGHT > MAX_TABLE_HEIGHT ? MAX_TABLE_HEIGHT : ONLY_RENDERED_ELEMENTS_HEIGHT + TABLE_HEADER_HEIGHT;

  // INFO: +3 is because there are 3 border (1px width) inside the table that makes the table scrolleable even if all elements are visible
  return TABLE_HEIGHT_CALC + 3;
}
