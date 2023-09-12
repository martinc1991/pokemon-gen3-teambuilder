'use client';

import { Typography } from 'ui';
import { PokemonTable } from '../../components/pokemon-table';
import { client } from '../../rq-client';

export default function Builder(): JSX.Element {
  const { isLoading, isError, data } = client.pokemon.getAll.useQuery(['allPokemon'], {
    query: {
      take: '30',
    },
  });

  if (isLoading) return <p>loading...</p>;
  if (isError) return <p>error...</p>;

  return (
    <>
      <Typography.H1>Builder</Typography.H1>

      <Typography.P>This is where you can build your team. Start by giving it a name, then add some pokemon.</Typography.P>

      <PokemonTable pokemon={data.body} />
    </>
  );
}
