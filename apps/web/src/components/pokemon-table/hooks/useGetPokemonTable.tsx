'use client';

import type { IPokemonGetAllQueryParams } from 'contract';
import { client } from '../../../rq-client';

// CHECK: if this number is right
export const POKEMON_QUERY_PAGE_SIZE = 20;

type PageParam = IPokemonGetAllQueryParams | undefined;

export function useGetPokemonTable() {
  const pokemonInfiniteQuery = client.pokemon.getAll.useInfiniteQuery(
    ['pokemon-infinite'],
    (context) => {
      // INFO: had to cast because ts-rest has some any in its typings but I know how this works
      const pageParam = context.pageParam as PageParam;
      return {
        query: {
          skip: pageParam?.skip ?? 0,
          take: pageParam?.take ?? POKEMON_QUERY_PAGE_SIZE,
        },
      };
    },
    {
      getNextPageParam: (lastPage, allPages): PageParam => {
        if (lastPage.body.length < POKEMON_QUERY_PAGE_SIZE) return undefined;
        return { skip: allPages.length * POKEMON_QUERY_PAGE_SIZE, take: POKEMON_QUERY_PAGE_SIZE };
      },
      keepPreviousData: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: false,
    }
  );

  return pokemonInfiniteQuery;
}
