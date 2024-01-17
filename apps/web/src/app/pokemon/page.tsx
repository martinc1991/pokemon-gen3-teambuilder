'use client';

import PageHeader from '@components/page-header';
import { PageContent } from '@components/pages/page-content';
import { PokemonTable } from '@components/pokemon-table';

export default function Builder(): JSX.Element {
  return (
    <>
      <PageHeader description='This is where you can start building your team. Add some pokemon.' title='Pokemon' />
      <PageContent>
        <PokemonTable />
      </PageContent>
    </>
  );
}
