import { client } from '@rq-client/index';
import { LocalSlot, PokemonWithAbilities } from 'contract';
import { Typography } from 'ui';
import { CalculateStatProps, calculateStat } from 'utils';

interface PokemonCardStatsProps {
  slot: LocalSlot;
  pokemon: PokemonWithAbilities;
}

export default function PokemonCardStats({ slot, pokemon }: PokemonCardStatsProps): JSX.Element {
  const { data, error, isLoading } = client.natures.getAll.useQuery(['all-natures']);

  if (isLoading) return <EmptyPokemonCardStats filler='-' />;
  if (error) return <EmptyPokemonCardStats filler='error' />;

  const nature = data.body.find((n) => {
    return n.name === slot.natureName;
  });

  if (!nature) return <div>error</div>;

  const basicArguments: Omit<CalculateStatProps, 'statName' | 'base' | 'ev' | 'iv'> = {
    level: slot.level,
    nature,
  };

  return (
    <div className='flex flex-col flex-1 gap-1'>
      <div className='flex items-center justify-between gap-1'>
        <Typography.Muted>HP: </Typography.Muted>
        <Typography.Small>
          {calculateStat({ ...basicArguments, statName: 'hp', base: pokemon.baseHp, ev: slot.evs.hp, iv: slot.ivs.hp })}
        </Typography.Small>
      </div>
      <div className='flex justify-between gap-1'>
        <Typography.Muted>Atk: </Typography.Muted>
        <Typography.Small>
          {calculateStat({ ...basicArguments, statName: 'attack', base: pokemon.baseAttack, ev: slot.evs.atk, iv: slot.ivs.atk })}
        </Typography.Small>
      </div>
      <div className='flex justify-between gap-1'>
        <Typography.Muted>Def: </Typography.Muted>
        <Typography.Small>
          {calculateStat({ ...basicArguments, statName: 'defense', base: pokemon.baseDefense, ev: slot.evs.def, iv: slot.ivs.def })}
        </Typography.Small>
      </div>
      <div className='flex justify-between gap-1'>
        <Typography.Muted>SpAtk: </Typography.Muted>
        <Typography.Small>
          {calculateStat({
            ...basicArguments,
            statName: 'spattack',
            base: pokemon.baseSpattack,
            ev: slot.evs.spa,
            iv: slot.ivs.spa,
          })}
        </Typography.Small>
      </div>
      <div className='flex justify-between gap-1'>
        <Typography.Muted>SpDef: </Typography.Muted>
        <Typography.Small>
          {calculateStat({
            ...basicArguments,
            statName: 'spdefense',
            base: pokemon.baseSpdefense,
            ev: slot.evs.spd,
            iv: slot.ivs.spd,
          })}
        </Typography.Small>
      </div>
      <div className='flex justify-between gap-1'>
        <Typography.Muted>Spe: </Typography.Muted>
        <Typography.Small>
          {calculateStat({ ...basicArguments, statName: 'speed', base: pokemon.baseSpeed, ev: slot.evs.spe, iv: slot.ivs.spe })}
        </Typography.Small>
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
