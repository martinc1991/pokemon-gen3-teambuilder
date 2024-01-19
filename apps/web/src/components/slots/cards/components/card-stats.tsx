import { client } from '@rq-client/index';
import { LocalSlot, PokemonWithAbilities, StatID, StatName } from 'contract';
import { useMemo } from 'react';
import { Typography } from 'ui';
import { CalculateStatProps, calculateStat, getMinMaxStat, getShortStatName, getStatValueColor } from 'utils';

interface PokemonCardStatsProps {
  slot: LocalSlot;
  pokemon: PokemonWithAbilities;
}

type BaseStat = 'baseHp' | 'baseAttack' | 'baseDefense' | 'baseSpattack' | 'baseSpdefense' | 'baseSpeed';

const statsNames: { expanded: StatName; condensed: StatID; base: BaseStat }[] = [
  { expanded: 'hp', condensed: 'hp', base: 'baseHp' },
  { expanded: 'attack', condensed: 'atk', base: 'baseAttack' },
  { expanded: 'defense', condensed: 'def', base: 'baseDefense' },
  { expanded: 'spattack', condensed: 'spa', base: 'baseSpattack' },
  { expanded: 'spdefense', condensed: 'spd', base: 'baseSpdefense' },
  { expanded: 'speed', condensed: 'spe', base: 'baseSpeed' },
];

export default function PokemonCardStats({ slot, pokemon }: PokemonCardStatsProps): JSX.Element {
  const { data, error, isLoading } = client.natures.getAll.useQuery(['all-natures']);

  if (isLoading) return <EmptyPokemonCardStats filler='-' />;
  if (error) return <EmptyPokemonCardStats filler='error' />;

  const nature = data.body.find((n) => {
    return n.name === slot.natureName;
  });

  if (!nature) return <EmptyPokemonCardStats filler='error' />;

  const basicArguments: Omit<CalculateStatProps, 'statName' | 'base' | 'ev' | 'iv'> = {
    level: slot.level,
    nature,
  };

  return (
    <div className='flex flex-col flex-1 gap-1 col-span-2'>
      {statsNames.map(({ condensed, expanded, base }) => {
        const value = calculateStat({
          ...basicArguments,
          statName: expanded,
          base: pokemon[base],
          ev: slot.evs[condensed],
          iv: slot.ivs[condensed],
        });
        return (
          <div key={condensed + 'stat'} className='flex items-center justify-between gap-2'>
            <Typography.Muted className='w-7'>{getShortStatName(condensed)}:</Typography.Muted>
            <StatColorBar statValue={value} statName={condensed} />
            <Typography.Small>{value}</Typography.Small>
          </div>
        );
      })}
    </div>
  );
}

function EmptyPokemonCardStats({ filler }: { filler: string }): JSX.Element {
  return (
    <div className='flex flex-col flex-1 gap-1 col-span-2'>
      {statsNames.map(({ condensed }) => {
        return (
          <div key={condensed + 'stat'} className='flex items-center justify-between gap-2'>
            <Typography.Muted className='w-7'>{getShortStatName(condensed)}:</Typography.Muted>
            <StatColorBar statValue={1} statName={condensed} />
            <Typography.Small>{filler}</Typography.Small>
          </div>
        );
      })}
    </div>
  );
}

interface StatColorBarProps {
  statValue: number;
  statName: StatID;
}

function StatColorBar(props: StatColorBarProps): JSX.Element {
  const { min, max } = getMinMaxStat(props.statName);

  const p = useMemo(() => Math.round((props.statValue / (max - min)) * 100), [props.statName, props.statValue]);
  const color = useMemo(() => getStatValueColor(p), [props.statName, props.statValue]);
  const width = `${p}%`;

  return (
    <div className='flex flex-1 h-full items-center'>
      <div className={'transition-all ease-in-out h-[70%] rounded-md'} style={{ width, backgroundColor: color }}></div>
    </div>
  );
}
