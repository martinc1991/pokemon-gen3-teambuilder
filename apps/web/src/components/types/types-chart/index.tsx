'use client';

import LoadingState from '@components/loading-state';
import { client } from '@rq-client/index';
import { Type } from 'contract';
import { Tooltip, TooltipContent, TooltipTrigger, TypeBadge, Typography } from 'ui';
import { getDamageMultiplier, getTooltipText, sortEmptyTypeFirst } from './helpers';

export function TypesChart(): JSX.Element {
  const { data, isFetching, isError, isLoading } = client.types.getAll.useQuery(['get-all-types']);

  if (isFetching || isLoading) {
    return <LoadingState />;
  }
  if (isError) {
    return <Typography.P>error...</Typography.P>;
  }

  // TODO: add filters
  // TODO: add pokemon examples with that typing combination
  return (
    <div className='grid grid-cols-[50px_1fr] grid-rows-[50px_1fr]'>
      <div></div>
      <div className='flex justify-center items-center'>
        <Typography.H4>Defending</Typography.H4>
      </div>
      <div className='flex justify-center items-center'>
        <Typography.H4 className='absolute -rotate-90'>Attacking</Typography.H4>
      </div>
      <div className=' flex justify-center items-center'>
        <Chart types={data.body} />
      </div>
    </div>
  );
}

function Chart({ types }: { types: Type[] }): JSX.Element {
  return (
    // TODO: make it responsive (how?)
    <table className='type-chart-table'>
      {types.sort(sortEmptyTypeFirst).map((type, rowIndex, arr) => {
        return (
          <tr className='type-chart-tr' key={type.id}>
            {arr.map((_, columnIndex) => {
              return (
                <td className='type-chart-td' key={`${rowIndex}-${columnIndex}`}>
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
