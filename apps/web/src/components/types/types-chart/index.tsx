'use client';

import LoadingState from '@components/loading-state';
import { client } from '@rq-client/index';
import { capitalize } from '@utils/common';
import clsx from 'clsx';
import { Type } from 'contract';
import { Tooltip, TooltipContent, TooltipTrigger, TypeBadge, Typography } from 'ui';

const cellMaxSize = '70px'; // height on first row, width on first column

export function TypesChart(): JSX.Element {
  const { data, isFetching, isError, isLoading } = client.types.getAll.useQuery(['get-all-types']);

  if (isFetching || isLoading) {
    return <LoadingState />;
  }
  if (isError) {
    return <Typography.P>error...</Typography.P>;
  }

  return (
    // TODO: round corners
    // TODO: make it responsive (how?)
    <table>
      {data.body.sort(sortEmptyTypeFirst).map((type, rowIndex, arr) => {
        const isFirstRow = rowIndex === 0;
        return (
          <tr key={type.id}>
            {arr.map((_, columnIndex) => {
              const isFirstColumn = columnIndex === 0;
              return (
                <td
                  className={clsx(
                    'border border-white',
                    isFirstRow ? `h-[${cellMaxSize}] w-11` : isFirstColumn ? `h-11 w-[${cellMaxSize}]` : '',
                  )}
                  key={`${rowIndex}-${columnIndex}`}
                >
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

  const isFirstRow = rowIndex === 0;
  const isFirstColumn = columnIndex === 0;

  if (isFirstRow && isFirstColumn) {
    return <></>;
  } else if (isFirstRow) {
    return (
      <div className='p-1 -rotate-90 -translate-x-[12px] -translate-y-[17px] absolute'>
        <TypeBadge type={defensiveType.name} />
      </div>
    );
  } else if (isFirstColumn) {
    return (
      <div className='p-1 text-center'>
        <TypeBadge type={ofensiveType.name} />
      </div>
    );
  } else {
    return <Multiplier ofensiveType={ofensiveType} defensiveType={defensiveType} />;
  }
}

interface MultiplierProps {
  ofensiveType: Type;
  defensiveType: Type;
}

function Multiplier({ ofensiveType, defensiveType }: MultiplierProps): JSX.Element {
  const multiplier = getDamageMultiplier(ofensiveType, defensiveType);
  const tooltipText = getTooltipText(ofensiveType, defensiveType);

  if (multiplier === '') {
    return <></>;
  }

  return (
    <Tooltip>
      <TooltipTrigger className='p-2 w-full h-full'>
        <Typography.Muted className='align-middle text-center'>{multiplier}</Typography.Muted>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltipText}</p>
      </TooltipContent>
    </Tooltip>
  );
}

// Aux
function sortEmptyTypeFirst(typeA: Type, typeB: Type): number {
  if (typeA.name === 'empty') {
    return -1;
  } else if (typeB.name === 'empty') {
    return 1;
  } else {
    return 0;
  }
}

type DamageMultiplierText = '0' | '2' | '1/2' | '';

function getDamageMultiplier(ofensiveType: Type, defensiveType: Type): DamageMultiplierText {
  if (ofensiveType.noDamageTo.includes(defensiveType.name)) {
    return '0';
  } else if (ofensiveType.doubleDamageTo.includes(defensiveType.name)) {
    return '2';
  } else if (ofensiveType.halfDamageTo.includes(defensiveType.name)) {
    return '1/2';
  }
  return '';
}

function getTooltipText(ofensiveType: Type, defensiveType: Type): string {
  const multiplier = getDamageMultiplier(ofensiveType, defensiveType);

  const offensive = capitalize(ofensiveType.name);
  const defensive = capitalize(defensiveType.name);

  switch (multiplier) {
    case '0':
      return `${offensive} makes no damage to ${defensive}`;
    case '2':
      return `${offensive} is super effective against ${defensive}`;
    case '1/2':
      return `${offensive} is not very effective against ${defensive}`;
    default:
      return '';
  }
}
