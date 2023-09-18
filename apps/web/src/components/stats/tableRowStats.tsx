import { IBaseStats } from 'contract';
import { Typography } from 'ui';
import { getKeys } from '../../utils/common';
import { getShortStatName, getTotalBaseStat } from '../../utils/pokemon';

interface TableRowStatsProps {
  stats: IBaseStats;
}

export function TableRowStats({ stats }: TableRowStatsProps): JSX.Element {
  return (
    <div className='flex flex-row items-center justify-center gap-6'>
      <div className='flex flex-row gap-1'>
        {getKeys(stats).map((statName) => {
          return (
            <div className='flex flex-col items-center gap-1 w-[26px]'>
              <Typography.Tiny className='text-muted-foreground'>{getShortStatName(statName)}</Typography.Tiny>
              <Typography.Small>{stats[statName]}</Typography.Small>
            </div>
          );
        })}
      </div>
      <div className='flex flex-col gap-1'>
        <Typography.Tiny className='text-muted-foreground'>BST</Typography.Tiny>
        <Typography.Small>{getTotalBaseStat(stats)}</Typography.Small>
      </div>
    </div>
  );
}
