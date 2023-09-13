'use client';

import { useEffect } from 'react';
import { Typography } from 'ui';
import { PokemonTable } from '../../components/pokemon-table';
import { client } from '../../rq-client';

const PAGE_SIZE = 50;

export default function Builder(): JSX.Element {
  const { isLoading, data, hasNextPage, fetchNextPage, isError, fetchStatus } = client.pokemon.getAll.useInfiniteQuery(
    ['pokemon-infinite'],
    (context) => {
      return { query: { skip: context.pageParam?.skip || '0', take: context.pageParam?.take || PAGE_SIZE.toString() } };
    },
    {
      getNextPageParam: (lastPage, allPages) => {
        if (lastPage.body.length < PAGE_SIZE) return undefined;
        return { skip: (allPages.length * PAGE_SIZE).toString(), take: PAGE_SIZE.toString() };
      },
    }
  );

  useEffect(() => {
    // Whenever fetching a batch finishes, load next one
    if (fetchStatus === 'idle' && hasNextPage) {
      void fetchNextPage();
    }
  }, [fetchStatus, hasNextPage]);

  if (isLoading) return <Typography.P>loading...</Typography.P>;
  if (isError) return <Typography.P>error...</Typography.P>;

  const pokemon = data.pages.flatMap((page) => (page.status === 200 ? page.body : []));

  return (
    <>
      <Typography.H1>Builder</Typography.H1>

      <Typography.P>This is where you can build your team. Start by giving it a name, then add some pokemon.</Typography.P>

      <PokemonTable pokemon={pokemon} />
    </>
  );
}
