'use client';

import PageHeader from '@components/page-header';

export default function Page({ params }: { params: { name: string } }): JSX.Element {
  console.log(params, 'params');
  return (
    <>
      <PageHeader description='Here are the details of each pokemon.' title='Pokemon' />
      <div>The pokemon name is: {params.name}</div>
    </>
  );
}
