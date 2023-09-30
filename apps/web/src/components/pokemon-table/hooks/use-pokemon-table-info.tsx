'use client';

import type { IPokemonGetAllQueryParams } from 'contract';
import { useEffect } from 'react';
import { client } from '../../../rq-client';

export const POKEMON_QUERY_PAGE_SIZE = 30; // CHECK: if this number is right
const POKEMON_TABLE_QUERY_KEY = 'pokemon-infinite';

type PageParam = IPokemonGetAllQueryParams | undefined;

export function usePokemonTableInfo() {
  const pokemonInfiniteQuery = client.pokemon.getAll.useInfiniteQuery(
    [POKEMON_TABLE_QUERY_KEY],
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
      cacheTime: 1000 * 60 * 60 * 24 * 7,
    }
  );

  const { fetchNextPage, hasNextPage, fetchStatus } = pokemonInfiniteQuery;

  useEffect(() => {
    // Whenever fetching a batch finishes, load next one
    if (fetchStatus === 'idle' && hasNextPage) void fetchNextPage();
  }, [fetchStatus, hasNextPage, fetchNextPage]);

  // Flattened data for usePokemonTableConfig to use
  const flatData = pokemonInfiniteQuery.data?.pages.flatMap((page) => page.body) || [];

  return { flatData, ...pokemonInfiniteQuery };
}
