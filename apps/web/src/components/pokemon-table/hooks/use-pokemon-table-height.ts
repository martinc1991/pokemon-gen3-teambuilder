import { useWindowSize } from 'usehooks-ts';
import { PAGE_HEADER_HEIGHT } from '../../page-header';
import { TABLE_HEADER_HEIGHT } from '../components/table-header';
import { TABLE_ROW_HEIGHT } from '../components/table-rows';
import { TABLE_FILTERS_HEIGHT } from '../filters';

const TAILWIND_GAP_4 = 16;
const MIN_HEIGHT = TABLE_HEADER_HEIGHT + TABLE_ROW_HEIGHT;

export function usePokemonTableHeight(RENDERED_ROWS: number): number {
  const { height } = useWindowSize();
  let returnedHeight = MIN_HEIGHT;

  // INFO: 20 to account for botton padding
  const MAX_HEIGHT = height - PAGE_HEADER_HEIGHT - TABLE_FILTERS_HEIGHT - TAILWIND_GAP_4 - 20;

  const RENDERED_ELEMENTS_HEIGHT = RENDERED_ROWS * TABLE_ROW_HEIGHT;
  const TABLE_HEIGHT_CALC = RENDERED_ELEMENTS_HEIGHT > MAX_HEIGHT ? MAX_HEIGHT : RENDERED_ELEMENTS_HEIGHT + TABLE_HEADER_HEIGHT;

  if (MIN_HEIGHT < TABLE_HEIGHT_CALC) {
    returnedHeight = TABLE_HEIGHT_CALC;
  }

  // INFO: +3 is because there are 3 border (1px width) inside the table that makes the table scrolleable even if all elements are visible
  return returnedHeight + 3;
}
