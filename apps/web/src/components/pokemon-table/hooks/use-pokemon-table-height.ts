import { useEffect, useState } from 'react';
import { useWindowSize } from 'usehooks-ts';
import { PAGE_HEADER_HEIGHT } from '../../page-header';
import { TABLE_HEADER_HEIGHT } from '../components/table-header';
import { TABLE_ROW_HEIGHT } from '../components/table-rows';
import { TABLE_FILTERS_HEIGHT } from '../filters';

const TAILWIND_MB_4 = 16; // To account for Filters div wrapper mb-4
const MIN = TABLE_ROW_HEIGHT; // No pokemon found or only one

export function usePokemonTableHeight(RENDERED_ROWS: number): number {
  const [returnedHeight, setReturnedHeight] = useState(MIN);
  const { height } = useWindowSize();

  useEffect(() => {
    // INFO: 20 to account for botton padding
    const MAX = height - PAGE_HEADER_HEIGHT - TABLE_FILTERS_HEIGHT - TAILWIND_MB_4 - 20 - TABLE_HEADER_HEIGHT;

    const HEIGHT = RENDERED_ROWS * TABLE_ROW_HEIGHT;

    if (HEIGHT > MAX) {
      setReturnedHeight(MAX);
      return;
    }
    if (HEIGHT < MIN) {
      setReturnedHeight(MIN);
      return;
    }
    setReturnedHeight(HEIGHT);
  }, [height, RENDERED_ROWS]);

  // INFO: +3 is because there are 3 border (1px width) inside the table that makes the table scrolleable even if all elements are visible
  return returnedHeight + 3;
}
