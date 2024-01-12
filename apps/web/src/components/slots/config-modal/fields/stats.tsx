import { useTeamStore } from '@state/team';
import type { Nature, NatureNames, StatName, StatsTable } from 'contract';
import { MAX_INDIVIDUAL_EV, MAX_INDIVIDUAL_IV, MAX_POSSIBLE_EVS } from 'contract';
import { NATURES } from 'pokemon-info';
import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';
import { Input, Progress, Slider, Typography } from 'ui';
import { calculateStat, getShortStatName, getTotalEvs } from 'utils';
import { GenericFieldProps } from './types';

interface StatsFieldsProps extends GenericFieldProps {
  evs: StatsTable;
  ivs: StatsTable;
  natureName: NatureNames;
  level: number;
}

export default function StatsFields({ slotId, pokemon, evs, ivs, natureName, level }: StatsFieldsProps): JSX.Element {
  const [setSlotFieldValue] = useTeamStore((state) => [state.setSlotFieldValue]);

  const totalEvs = getTotalEvs(evs);

  function handleEvChange(newEvs: StatsTable): void {
    setSlotFieldValue(slotId, 'evs', newEvs);
  }

  function handleIvChange(newIvs: StatsTable): void {
    setSlotFieldValue(slotId, 'ivs', newIvs);
  }

  const nature = NATURES.find((nat) => nat.name === natureName) || { increased: null, decreased: null }; // DEFAULT: docile nature

  return (
    <div className='flex flex-col w-full gap-1'>
      <StatsHeader />
      <StatField
        base={pokemon.baseHp}
        ev={evs.hp}
        iv={ivs.hp}
        level={level}
        nature={nature}
        onChangeEv={(value) => {
          handleEvChange({ ...evs, hp: value });
        }}
        onChangeIv={(value) => {
          handleIvChange({ ...ivs, hp: value });
        }}
        statName='hp'
        totalEvs={totalEvs}
      />
      <StatField
        base={pokemon.baseAttack}
        ev={evs.atk}
        iv={ivs.atk}
        level={level}
        nature={nature}
        onChangeEv={(value) => {
          handleEvChange({ ...evs, atk: value });
        }}
        onChangeIv={(value) => {
          handleIvChange({ ...ivs, atk: value });
        }}
        statName='attack'
        totalEvs={totalEvs}
      />
      <StatField
        base={pokemon.baseDefense}
        ev={evs.def}
        iv={ivs.def}
        level={level}
        nature={nature}
        onChangeEv={(value) => {
          handleEvChange({ ...evs, def: value });
        }}
        onChangeIv={(value) => {
          handleIvChange({ ...ivs, def: value });
        }}
        statName='defense'
        totalEvs={totalEvs}
      />
      <StatField
        base={pokemon.baseSpattack}
        ev={evs.spa}
        iv={ivs.spa}
        level={level}
        nature={nature}
        onChangeEv={(value) => {
          handleEvChange({ ...evs, spa: value });
        }}
        onChangeIv={(value) => {
          handleIvChange({ ...ivs, spa: value });
        }}
        statName='spattack'
        totalEvs={totalEvs}
      />
      <StatField
        base={pokemon.baseSpdefense}
        ev={evs.spd}
        iv={ivs.spd}
        level={level}
        nature={nature}
        onChangeEv={(value) => {
          handleEvChange({ ...evs, spd: value });
        }}
        onChangeIv={(value) => {
          handleIvChange({ ...ivs, spd: value });
        }}
        statName='spdefense'
        totalEvs={totalEvs}
      />
      <StatField
        base={pokemon.baseSpeed}
        ev={evs.spe}
        iv={ivs.spe}
        level={level}
        nature={nature}
        onChangeEv={(value) => {
          handleEvChange({ ...evs, spe: value });
        }}
        onChangeIv={(value) => {
          handleIvChange({ ...ivs, spe: value });
        }}
        statName='speed'
        totalEvs={totalEvs}
      />
    </div>
  );
}

interface SlotStatFieldProps {
  statName: StatName;
  base: number;
  ev: number;
  iv: number;
  level: number;
  nature: Pick<Nature, 'increased' | 'decreased'>;
  onChangeEv?: (value: number) => void;
  onChangeIv?: (value: number) => void;
  totalEvs: number;
}

const evsLimits = { max: MAX_INDIVIDUAL_EV, min: 0 };
const ivsLimits = { max: MAX_INDIVIDUAL_IV, min: 0 };

function StatField(props: SlotStatFieldProps): JSX.Element {
  const statTotal = calculateStat(props);
  const [currentEvs, setCurrentEvs] = useState(props.ev);

  const maxEvsReached = props.totalEvs >= MAX_POSSIBLE_EVS;

  useEffect(() => {
    setCurrentEvs(props.ev);
  }, [props.ev]);

  const progress = (statTotal / 714) * 100; // TODO: extract to constant, also make it logarithmic

  // EVs handlers
  function handleEvOnChangeInput(e: ChangeEvent<HTMLInputElement>): void {
    if (props.onChangeEv) {
      const newEvs = parseInt(e.target.value);
      if (maxEvsReached && newEvs >= currentEvs) return;
      props.onChangeEv(parseInt(e.target.value));
    }
  }
  function handleEvOnChangeSlider([newEvs]: [number]): void {
    if (maxEvsReached && newEvs >= currentEvs) return;
    // INFO: This only keeps slider on the corresponding position according to global ev state
    setCurrentEvs(newEvs);
  }
  function handleEvOnCommit([value]: [number]): void {
    if (props.onChangeEv) {
      // INFO: Keep EVs below max
      if (props.totalEvs - props.ev + value > MAX_POSSIBLE_EVS) {
        props.onChangeEv(props.ev + (MAX_POSSIBLE_EVS - props.totalEvs));
      } else {
        props.onChangeEv(value);
      }
    }
  }

  // IVs handlers
  function handleIvOnChange(e: ChangeEvent<HTMLInputElement>): void {
    if (props.onChangeIv) {
      props.onChangeIv(parseInt(e.target.value));
    }
  }

  return (
    <div className='flex items-center w-full gap-2'>
      <div className='flex items-center justify-center w-12'>
        <Typography.Muted>{getShortStatName(props.statName)}</Typography.Muted>
      </div>
      <div className='flex items-center justify-center w-12'>
        <Typography.Small>{props.base}</Typography.Small>
      </div>
      <div className='flex items-center justify-center flex-[4]'>
        <Progress value={progress} />
      </div>
      <div className='flex justify-between gap-4 items-center flex-[6]'>
        <Input className='w-[80px] h-[30px]' {...evsLimits} onChange={handleEvOnChangeInput} type='number' value={currentEvs} />
        <Slider {...evsLimits} onValueChange={handleEvOnChangeSlider} onValueCommit={handleEvOnCommit} value={[currentEvs]} />
      </div>
      <div className='flex items-center justify-center flex-[1] ml-5'>
        <Input className='w-[70px] h-[30px]' {...ivsLimits} onChange={handleIvOnChange} type='number' value={props.iv} />
      </div>
      <div className='flex items-center justify-center w-12'>
        <Typography.Small>{statTotal}</Typography.Small>
      </div>
    </div>
  );
}

function StatsHeader(): JSX.Element {
  return (
    <div className='flex items-center w-full gap-2 mb-1'>
      <div className='flex items-center justify-center w-12'>
        <Typography.Muted />
      </div>
      <div className='flex items-center justify-center w-12'>
        <Typography.Muted>Base</Typography.Muted>
      </div>
      <div className='text-center flex-[4]' />
      <div className='text-center flex-[6]'>
        <Typography.Muted>EVs</Typography.Muted>
      </div>
      <div className='text-center w-[70px] ml-5'>
        <Typography.Muted>IVs</Typography.Muted>
      </div>
      <div className='flex items-center justify-center w-12'>
        <Typography.Muted>Total</Typography.Muted>
      </div>
    </div>
  );
}
