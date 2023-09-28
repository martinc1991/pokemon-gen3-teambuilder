import { Typography } from 'ui';
import { client } from '../../../../rq-client';
import type { FilledSlot } from '../../../../state/team/helpers';
import type { CalculateStatProps } from '../../../../utils/pokemon';
import { calculateStat } from '../../../../utils/pokemon';

interface PokemonCardStatsProps {
  slot: FilledSlot;
}

export default function PokemonCardStats({ slot }: PokemonCardStatsProps): JSX.Element {
  const { data, error, isLoading } = client.natures.getAll.useQuery(['all-natures']);
  const { pokemon } = slot;

  if (isLoading) return <EmptyPokemonCardStats filler='-' />;
  if (error) return <EmptyPokemonCardStats filler='error' />;

  const nature = data.body.find((n) => {
    return n.name === slot.natureName;
  });

  if (!nature) return <div>error</div>;

  const basicArguments: Omit<CalculateStatProps, 'statName' | 'base' | 'ev'> = {
    iv: 0, // HARDCODED: // TODO: add ivs to schema
    level: slot.level,
    nature,
  };

  return (
    <div className='flex flex-col items-start flex-1 gap-2'>
      <Typography.H4>Stats</Typography.H4>
      <div className='flex flex-col w-full gap-1'>
        <div className='flex items-center justify-between gap-1'>
          <Typography.Muted>HP: </Typography.Muted>
          <Typography.Small>{calculateStat({ ...basicArguments, statName: 'hp', base: pokemon.baseHp, ev: slot.evHp })}</Typography.Small>
        </div>
        <div className='flex justify-between gap-1'>
          <Typography.Muted>Atk: </Typography.Muted>
          <Typography.Small>
            {calculateStat({ ...basicArguments, statName: 'attack', base: pokemon.baseAttack, ev: slot.evAttack })}
          </Typography.Small>
        </div>
        <div className='flex justify-between gap-1'>
          <Typography.Muted>Def: </Typography.Muted>
          <Typography.Small>
            {calculateStat({ ...basicArguments, statName: 'defense', base: pokemon.baseDefense, ev: slot.evDefense })}
          </Typography.Small>
        </div>
        <div className='flex justify-between gap-1'>
          <Typography.Muted>SpAtk: </Typography.Muted>
          <Typography.Small>
            {calculateStat({ ...basicArguments, statName: 'spattack', base: pokemon.baseSpattack, ev: slot.evSpAttack })}
          </Typography.Small>
        </div>
        <div className='flex justify-between gap-1'>
          <Typography.Muted>SpDef: </Typography.Muted>
          <Typography.Small>
            {calculateStat({ ...basicArguments, statName: 'spdefense', base: pokemon.baseSpdefense, ev: slot.evSpDefense })}
          </Typography.Small>
        </div>
        <div className='flex justify-between gap-1'>
          <Typography.Muted>Spe: </Typography.Muted>
          <Typography.Small>
            {calculateStat({ ...basicArguments, statName: 'speed', base: pokemon.baseSpeed, ev: slot.evSpeed })}
          </Typography.Small>
        </div>
      </div>
    </div>
  );
}

function EmptyPokemonCardStats({ filler }: { filler: string }): JSX.Element {
  return (
    <div className='flex flex-col items-start flex-1 gap-2'>
      <Typography.H4>Stats</Typography.H4>
      <div className='flex flex-col w-full gap-1'>
        <div className='flex items-center justify-between gap-1'>
          <Typography.Muted>HP: </Typography.Muted>
          <Typography.Small>{filler}</Typography.Small>
        </div>
        <div className='flex justify-between gap-1'>
          <Typography.Muted>Atk: </Typography.Muted>
          <Typography.Small>{filler}</Typography.Small>
        </div>
        <div className='flex justify-between gap-1'>
          <Typography.Muted>Def: </Typography.Muted>
          <Typography.Small>{filler}</Typography.Small>
        </div>
        <div className='flex justify-between gap-1'>
          <Typography.Muted>SpAtk: </Typography.Muted>
          <Typography.Small>{filler}</Typography.Small>
        </div>
        <div className='flex justify-between gap-1'>
          <Typography.Muted>SpDef: </Typography.Muted>
          <Typography.Small>{filler}</Typography.Small>
        </div>
        <div className='flex justify-between gap-1'>
          <Typography.Muted>Spe: </Typography.Muted>
          <Typography.Small>{filler}</Typography.Small>
        </div>
      </div>
    </div>
  );
}
