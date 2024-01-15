'use client';

import PageHeader from '@components/page-header';
import { formatPokemonName } from 'utils';

interface PageProps {
  params: {
    name: string;
  };
}

export default function Page({ params }: PageProps): JSX.Element {
  return (
    <>
      <PageHeader description={`Characteristics of ${formatPokemonName(params.name)}`} title='Pokemon details' />
    </>
  );
}
