import { useTeamStore } from '@state/team';
import type { Nature, StatName, StatsTable } from 'contract';
import { MAX_INDIVIDUAL_EV, MAX_INDIVIDUAL_IV, MAX_POSSIBLE_EVS } from 'contract';
import { NATURES } from 'pokemon-info';
import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';
import { Input, Progress, Slider, Typography } from 'ui';
import { calculateStat, getShortStatName, getTotalEvs } from 'utils';
import { GenericFieldProps } from './types';

interface StatsFieldsProps extends GenericFieldProps {}

export default function StatsFields({ slot, pokemon }: StatsFieldsProps): JSX.Element {
  const [setSlotFieldValue] = useTeamStore((state) => [state.setSlotFieldValue]);

  const totalEvs = getTotalEvs(slot.evs);

  function handleEvChange(newEvs: StatsTable): void {
    setSlotFieldValue(slot, 'evs', newEvs);
  }

  function handleIvChange(newIvs: StatsTable): void {
    setSlotFieldValue(slot, 'ivs', newIvs);
  }

  const nature = NATURES.find((nat) => nat.name === slot.natureName) || { increased: null, decreased: null }; // DEFAULT: docile nature

  return (
    <div className='flex flex-col w-full gap-1'>
      <StatsHeader />
      <StatField
        base={pokemon.baseHp}
        ev={slot.evs.hp}
        iv={slot.ivs.hp}
        level={slot.level}
        nature={nature}
        onChangeEv={(value) => {
          handleEvChange({ ...slot.evs, hp: value });
        }}
        onChangeIv={(value) => {
          handleIvChange({ ...slot.ivs, hp: value });
        }}
        statName='hp'
        totalEvs={totalEvs}
      />
      <StatField
        base={pokemon.baseAttack}
        ev={slot.evs.atk}
        iv={slot.ivs.atk}
        level={slot.level}
        nature={nature}
        onChangeEv={(value) => {
          handleEvChange({ ...slot.evs, atk: value });
        }}
        onChangeIv={(value) => {
          handleIvChange({ ...slot.ivs, atk: value });
        }}
        statName='attack'
        totalEvs={totalEvs}
      />
      <StatField
        base={pokemon.baseDefense}
        ev={slot.evs.def}
        iv={slot.ivs.def}
        level={slot.level}
        nature={nature}
        onChangeEv={(value) => {
          handleEvChange({ ...slot.evs, def: value });
        }}
        onChangeIv={(value) => {
          handleIvChange({ ...slot.ivs, def: value });
        }}
        statName='defense'
        totalEvs={totalEvs}
      />
      <StatField
        base={pokemon.baseSpattack}
        ev={slot.evs.spa}
        iv={slot.ivs.spa}
        level={slot.level}
        nature={nature}
        onChangeEv={(value) => {
          handleEvChange({ ...slot.evs, spa: value });
        }}
        onChangeIv={(value) => {
          handleIvChange({ ...slot.ivs, spa: value });
        }}
        statName='spattack'
        totalEvs={totalEvs}
      />
      <StatField
        base={pokemon.baseSpdefense}
        ev={slot.evs.spd}
        iv={slot.ivs.spd}
        level={slot.level}
        nature={nature}
        onChangeEv={(value) => {
          handleEvChange({ ...slot.evs, spd: value });
        }}
        onChangeIv={(value) => {
          handleIvChange({ ...slot.ivs, spd: value });
        }}
        statName='spdefense'
        totalEvs={totalEvs}
      />
      <StatField
        base={pokemon.baseSpeed}
        ev={slot.evs.spe}
        iv={slot.ivs.spe}
        level={slot.level}
        nature={nature}
        onChangeEv={(value) => {
          handleEvChange({ ...slot.evs, spe: value });
        }}
        onChangeIv={(value) => {
          handleIvChange({ ...slot.ivs, spe: value });
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
