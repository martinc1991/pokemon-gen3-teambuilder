'use client';

import { useTypeChartStore } from '@state/type-chart';
import { useSelectedDefendingTypesNames } from '@state/type-chart/use-selected-defending-types-names';
import clsx from 'clsx';
import { Type } from 'contract';
import { Tooltip, TooltipContent, TooltipTrigger, TypeBadge, Typography } from 'ui';
import { getDamageMultiplier, getTooltipText, sortEmptyTypeFirst } from './../helpers';
import { useWindowSize } from 'usehooks-ts';

interface TypeChartTableProps {
  types: Type[];
}

export function TypeChartTable({ types }: TypeChartTableProps): JSX.Element {
  const { width } = useWindowSize();

  const biggerThan1200 = width > 1200;

  return (
    <div className={clsx('', biggerThan1200 ? 'grid grid-cols-[50px_1fr] grid-rows-[50px_1fr]' : 'mt-4')}>
      {biggerThan1200 && <div></div>}
      {biggerThan1200 && (
        <div className='flex justify-center items-center'>
          <Typography.H4>Defending</Typography.H4>
        </div>
      )}
      {biggerThan1200 && (
        <div className='flex justify-center items-center'>
          <Typography.H4 className='absolute -rotate-90'>Attacking</Typography.H4>
        </div>
      )}
      <div className='flex justify-center items-center'>
        <Chart tinyBadges={!biggerThan1200} types={types} />
      </div>
    </div>
  );
}

function Chart({ types, tinyBadges }: { types: Type[]; tinyBadges: boolean }): JSX.Element {
  const [attackingType] = useTypeChartStore((state) => [state.attackingType]);
  const defensiveTypesNames = useSelectedDefendingTypesNames();

  return (
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
                  <TableCellContent tinyBadges={tinyBadges} types={arr} columnIndex={columnIndex} rowIndex={rowIndex} />
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
  tinyBadges: boolean;
}

function TableCellContent({ types, rowIndex, columnIndex, tinyBadges }: TableCellContentProps): JSX.Element {
  const ofensiveType: Type = types[rowIndex]; // Defensive type
  const defensiveType: Type = types[columnIndex]; // Ofensive type

  const isFirstRow = rowIndex === 0;
  const isFirstColumn = columnIndex === 0;

  if (isFirstRow && isFirstColumn) {
    return <></>;
  } else if (isFirstRow) {
    // CASE: defending types
    return (
      <div className={clsx('p-1', tinyBadges ? 'text-center' : '-rotate-90 -translate-x-[12px] -translate-y-[17px] absolute')}>
        <TypeBadge tiny={tinyBadges} type={defensiveType.name} />
      </div>
    );
  } else if (isFirstColumn) {
    // CASE: attacking types
    return (
      <div className='p-1 text-center'>
        <TypeBadge tiny={tinyBadges} type={ofensiveType.name} />
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
