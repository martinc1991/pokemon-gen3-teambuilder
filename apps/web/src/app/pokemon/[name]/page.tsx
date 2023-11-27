'use client';

import PageHeader from '@components/page-header';

export default function Page({ params }: { params: { name: string } }): JSX.Element {
  return (
    <>
      <PageHeader description={`Characteristics of ${params.name}`} title='Pokemon details' />
    </>
  );
}
