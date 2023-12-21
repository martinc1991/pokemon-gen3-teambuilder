'use client';

import LoadingState from '@components/loading-state';
import { client } from '@rq-client/index';
import { Type } from 'contract';
import type { Metadata } from 'next';
import { TypeBadge, Typography } from 'ui';

export const metadata: Metadata = {
  title: 'Pokemon Gen 3 TeamBuilder',
};

function sortEmptyTypeFirst(typeA: Type, typeB: Type): number {
  if (typeA.name === 'empty') {
    return -1;
  } else if (typeB.name === 'empty') {
    return 1;
  } else {
    return 0;
  }
}

export function TypesChart(): JSX.Element {
  const { data, isFetching, isError, isLoading } = client.types.getAll.useQuery(['get-all-types']);

  if (isFetching || isLoading) {
    return <LoadingState />;
  }
  if (isError) {
    return <Typography.P>error...</Typography.P>;
  }

  return (
    // TODO: add tooltip on talbe cells to tell: "this type makes super effective damage to this type"
    // TODO: round corners
    // TODO: make it responsive (how?)
    <table>
      {data.body.sort(sortEmptyTypeFirst).map((type, rowIndex, arr) => {
        return (
          <tr key={type.id}>
            {arr.map((_, columnIndex) => {
              return (
                <td className='p-2 border border-white h-auto rounded-tl-lg' key={`${rowIndex}-${columnIndex}`}>
                  <TableCellContent types={arr} columnIndex={columnIndex} rowIndex={rowIndex} />
                </td>
              );
            })}
          </tr>
        );
      })}
    </table>
  );
}

interface TableCellContentProps {
  types: Type[];
  rowIndex: number;
  columnIndex: number;
}

function TableCellContent({ types, rowIndex, columnIndex }: TableCellContentProps): JSX.Element {
  const ofensiveType: Type = types[rowIndex]; // Defensive type
  const defensiveType: Type = types[columnIndex]; // Ofensive type

  if (rowIndex === 0 && columnIndex === 0) {
    return <></>;
  } else if (rowIndex === 0) {
    // TODO: rotate defensive types
    return <TypeBadge type={defensiveType.name} />;
  } else if (columnIndex === 0) {
    return <TypeBadge type={ofensiveType.name} />;
  } else {
    return <Multiplier ofensiveType={ofensiveType} defensiveType={defensiveType} />;
  }
}

interface MultiplierProps {
  ofensiveType: Type;
  defensiveType: Type;
}

function Multiplier({ ofensiveType, defensiveType }: MultiplierProps): JSX.Element {
  return <Typography.Muted className='align-middle text-center'>{getDamageMultiplier(ofensiveType, defensiveType)}</Typography.Muted>;
}

function getDamageMultiplier(ofensiveType: Type, defensiveType: Type): string {
  if (ofensiveType.noDamageTo.includes(defensiveType.name)) {
    return '0';
  } else if (ofensiveType.doubleDamageTo.includes(defensiveType.name)) {
    return '2';
  } else if (ofensiveType.halfDamageTo.includes(defensiveType.name)) {
    return '1/2';
  }
  return '';
}
