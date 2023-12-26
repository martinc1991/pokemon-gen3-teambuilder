'use client';

import LoadingState from '@components/loading-state';
import { client } from '@rq-client/index';
import { useTypeChartStore } from '@state/type-chart';
import { useSelectedDefendingTypesNames } from '@state/type-chart/use-selected-defending-types-names';
import clsx from 'clsx';
import { Type } from 'contract';
import { Separator, Tooltip, TooltipContent, TooltipTrigger, TypeBadge, Typography } from 'ui';
import { AttackingFilters } from './filters/attacking';
import { DefendingFilters } from './filters/defending';
import { getDamageMultiplier, getTooltipText, sortEmptyTypeFirst } from './helpers';

export function TypesChart(): JSX.Element {
  const { data, isError, isLoading } = client.types.getAll.useQuery(['get-all-types']);

  if (isLoading) {
    return <LoadingState />;
  }
  if (isError) {
    return <Typography.P>error...</Typography.P>;
  }

  return (
    <div className='flex w-full'>
      <div className='flex-1 flex gap-2 flex-col justify-start'>
        <AttackingFilters types={data.body} />
        <Separator></Separator>
        <DefendingFilters types={data.body} />
      </div>
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
    </div>
  );
}

function Chart({ types }: { types: Type[] }): JSX.Element {
  const [attackingType] = useTypeChartStore((state) => [state.attackingType]);
  const defensiveTypesNames = useSelectedDefendingTypesNames();

  return (
    // TODO: make it responsive (how?)
    <table className='type-chart-table'>
      {types.sort(sortEmptyTypeFirst).map((type, rowIndex, arr) => {
        return (
          <tr className='type-chart-tr' key={type.id}>
            {arr.map((t, columnIndex) => {
              return (
                <td
                  className={clsx(
                    'type-chart-td h-[45px] w-[45px]',
                    attackingType?.name === type.name && 'bg-primary',
                    defensiveTypesNames.includes(t.name) && 'bg-primary',
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
    // CASE: defending types
    return (
      <div className='p-1 -rotate-90 -translate-x-[12px] -translate-y-[17px] absolute'>
        <TypeBadge type={defensiveType.name} />
      </div>
    );
  } else if (isFirstColumn) {
    // CASE: attacking types
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
  const [attackingType] = useTypeChartStore((state) => [state.attackingType]);
  const defensiveTypesNames = useSelectedDefendingTypesNames();
  const isSelected = attackingType?.name === ofensiveType.name || defensiveTypesNames.includes(defensiveType.name);

  const multiplier = getDamageMultiplier(ofensiveType, defensiveType);
  const tooltipText = getTooltipText(ofensiveType, defensiveType);

  if (multiplier === '') {
    return <></>;
  }

  return (
    <Tooltip>
      <TooltipTrigger className='p-2 w-full h-full'>
        <Typography.Muted className={clsx('align-middle text-center', isSelected && 'text-white')}>{multiplier}</Typography.Muted>
      </TooltipTrigger>
      <TooltipContent>
        <p>{tooltipText}</p>
      </TooltipContent>
    </Tooltip>
  );
}
