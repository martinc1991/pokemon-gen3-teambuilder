'use client';

import React from 'react';
import { client } from '../rq-client';

export default function Querier(): JSX.Element {
  const allTypes = client.types.getAll.useQuery(['alltypes'], {});

  if (allTypes.isLoading) return <p>loading...</p>;
  if (allTypes.isError) return <p>error...</p>;

  return (
    <div style={{ background: 'pink' }}>
      {allTypes.data.body.map((type) => {
        return <p key={type.name}>{type.name}</p>;
      })}
    </div>
  );
}
