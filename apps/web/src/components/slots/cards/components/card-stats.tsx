import { client } from '@rq-client/index';
import { clsx } from 'clsx';
import {
  LocalSlot,
  MAX_ATK,
  MAX_DEF,
  MAX_HP,
  MAX_SPA,
  MAX_SPD,
  MAX_SPE,
  MIN_ATK,
  MIN_DEF,
  MIN_HP,
  MIN_SPA,
  MIN_SPD,
  MIN_SPE,
  PokemonWithAbilities,
  StatID,
  StatName,
} from 'contract';
import { Typography } from 'ui';
import { CalculateStatProps, calculateStat, getShortStatName } from 'utils';

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
            <StatColorBar value={value} statName={condensed} />
            <Typography.Small>{value}</Typography.Small>
          </div>
        );
      })}
    </div>
  );
}

interface StatColorBarProps {
  value: number;
  statName: StatID;
}

function StatColorBar(props: StatColorBarProps): JSX.Element {
  const { min, max } = getMinMaxStat(props.statName);

  const p = Math.round((props.value / (max - min)) * 100);

  const color = getStatColor(p);

  const width = `${p}%`;

  return (
    <div className='flex flex-1 h-full items-center'>
      <div className={clsx('transition-all ease-in-out h-[70%] rounded-md', `bg-${color}`)} style={{ width }}></div>
    </div>
  );
}

function getStatColor(value: number): string {
  switch (true) {
    case value > 90:
      return 'stats-veryhigh';
    case value > 60:
      return 'stats-high';
    case value > 30:
      return 'stats-mid';
    case value > 10:
      return 'stats-low';
    default:
      return 'stats-verylow';
  }
}

function getMinMaxStat(stat: StatID): { min: number; max: number } {
  switch (stat) {
    case 'hp':
      return { min: MIN_HP, max: MAX_HP };
    case 'atk':
      return { min: MIN_ATK, max: MAX_ATK };
    case 'def':
      return { min: MIN_DEF, max: MAX_DEF };
    case 'spa':
      return { min: MIN_SPA, max: MAX_SPA };
    case 'spd':
      return { min: MIN_SPD, max: MAX_SPD };
    case 'spe':
      return { min: MIN_SPE, max: MAX_SPE };
    default:
      return { min: 1, max: 1 };
  }
}

function EmptyPokemonCardStats({ filler }: { filler: string }): JSX.Element {
  return (
    <div className='flex flex-col flex-1 gap-1 col-span-2'>
      {statsNames.map(({ condensed }) => {
        const value = filler;
        return (
          <div key={condensed + 'stat'} className='flex items-center justify-between gap-2'>
            <Typography.Muted className='w-7'>{getShortStatName(condensed)}:</Typography.Muted>
            <StatColorBar value={1} statName={condensed} />
            <Typography.Small>{value}</Typography.Small>
          </div>
        );
      })}
    </div>
  );
}
