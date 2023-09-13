'use client';

import type { IPokemonGetAllQueryParams } from 'contract';
import { useEffect } from 'react';
import { Typography } from 'ui';
import { PokemonTable } from '../../components/pokemon-table';
import { client } from '../../rq-client';

const PAGE_SIZE = 50;

export default function Builder(): JSX.Element {
  const { isLoading, data, hasNextPage, fetchNextPage, isError, fetchStatus } = client.pokemon.getAll.useInfiniteQuery(
    ['pokemon-infinite'],
    (context) => {
      // INFO: had to cast because ts-rest has some any in its typings but I know how this works
      const pageParam = context.pageParam as IPokemonGetAllQueryParams;
      return {
        query: {
          skip: pageParam?.skip ?? 0,
          take: pageParam?.take ?? PAGE_SIZE,
        },
      };
    },
    {
      getNextPageParam: (lastPage, allPages): IPokemonGetAllQueryParams | undefined => {
        if (lastPage.body.length < PAGE_SIZE) return undefined;
        return { skip: allPages.length * PAGE_SIZE, take: PAGE_SIZE };
      },
    }
  );

  useEffect(() => {
    // Whenever fetching a batch finishes, load next one
    if (fetchStatus === 'idle' && hasNextPage) void fetchNextPage();
  }, [fetchStatus, hasNextPage]);

  if (isLoading) return <Typography.P>loading...</Typography.P>;
  if (isError) {
    return <Typography.P>error...</Typography.P>;
  }

  const pokemon = data.pages.flatMap((page) => page.body);

  return (
    <>
      <Typography.H1>Builder</Typography.H1>

      <Typography.P>This is where you can build your team. Start by giving it a name, then add some pokemon.</Typography.P>

      <PokemonTable pokemon={pokemon} />
    </>
  );
}
