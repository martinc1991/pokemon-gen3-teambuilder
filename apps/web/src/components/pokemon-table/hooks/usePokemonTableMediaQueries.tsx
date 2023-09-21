import { useMediaQuery } from 'usehooks-ts';

export function usePokemonTableMediaQueries() {
  const moreThan1500 = useMediaQuery('(min-width: 1500px)');
  const moreThan1200 = useMediaQuery('(min-width: 1200px)');
  const moreThan1000 = useMediaQuery('(min-width: 1000px)');

  return { moreThan1500, moreThan1200, moreThan1000 };
}
