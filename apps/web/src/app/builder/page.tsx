'use client';

import type { IPokemonGetAllQueryParams } from 'contract';
import { useEffect } from 'react';
import { Typography } from 'ui';
import LoadingState from '../../components/loading-state';
import { PokemonTable } from '../../components/pokemon-table';
import { client } from '../../rq-client';
import { BUILDER_PAGE_HEADER_HEIGHT, POKEMON_QUERY_PAGE_SIZE } from './constants';

type PageParam = IPokemonGetAllQueryParams | undefined;

export default function Builder(): JSX.Element {
  const { isLoading, data, hasNextPage, fetchNextPage, isError, fetchStatus } = client.pokemon.getAll.useInfiniteQuery(
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

  useEffect(() => {
    // Whenever fetching a batch finishes, load next one
    if (fetchStatus === 'idle' && hasNextPage) void fetchNextPage();
  }, [fetchStatus, hasNextPage]);

  if (isLoading) return <LoadingState />;
  if (isError) {
    return <Typography.P>error...</Typography.P>;
  }

  const pokemon = data.pages.flatMap((page) => page.body);

  return (
    <>
      <div className='flex flex-col items-center' style={{ height: BUILDER_PAGE_HEADER_HEIGHT }}>
        <Typography.H1>Builder</Typography.H1>
        <Typography.P>This is where you can build your team. Start by giving it a name, then add some pokemon.</Typography.P>
      </div>

      <PokemonTable pokemon={pokemon} />
    </>
  );
}
