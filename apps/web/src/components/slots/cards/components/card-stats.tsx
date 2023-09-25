import type { IPokemon } from 'contract';
import { Typography } from 'ui';

interface PokemonCardStatsProps {
  pokemon: IPokemon;
}

export default function PokemonCardStats({ pokemon }: PokemonCardStatsProps): JSX.Element {
  return (
    <div className='flex flex-col items-start flex-1 gap-2'>
      <Typography.H4>Stats</Typography.H4>
      <div className='flex flex-col w-full gap-1'>
        <div className='flex items-center justify-between gap-1'>
          <Typography.Muted>HP: </Typography.Muted>
          <Typography.Small>{pokemon.baseHp || '-'}</Typography.Small>
        </div>
        <div className='flex justify-between gap-1'>
          <Typography.Muted>Atk: </Typography.Muted>
          <Typography.Small>{pokemon.baseAttack || '-'}</Typography.Small>
        </div>
        <div className='flex justify-between gap-1'>
          <Typography.Muted>Def: </Typography.Muted>
          <Typography.Small>{pokemon.baseDefense || '-'}</Typography.Small>
        </div>
        <div className='flex justify-between gap-1'>
          <Typography.Muted>SpAtk: </Typography.Muted>
          <Typography.Small>{pokemon.baseSpattack || '-'}</Typography.Small>
        </div>
        <div className='flex justify-between gap-1'>
          <Typography.Muted>SpDef: </Typography.Muted>
          <Typography.Small>{pokemon.baseSpdefense || '-'}</Typography.Small>
        </div>
        <div className='flex justify-between gap-1'>
          <Typography.Muted>Spe: </Typography.Muted>
          <Typography.Small>{pokemon.baseSpeed || '-'}</Typography.Small>
        </div>
      </div>
    </div>
  );
}
