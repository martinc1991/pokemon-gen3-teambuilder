'use client';

import PageHeader from '@components/page-header';
interface PageProps {
  params: {
    name: string;
  };
}

export default function Page({ params }: PageProps): JSX.Element {
  return (
    <>
      <PageHeader
        description={`Characteristics of ${params.name.charAt(0).toUpperCase() + params.name.substring(1)}`}
        title='Pokemon details'
      />
    </>
  );
}
