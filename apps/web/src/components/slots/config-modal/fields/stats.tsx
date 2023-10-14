import type { CompleteNature, EvFieldName, IvFieldName, StatName } from 'contract';
import { MAX_INDIVIDUAL_EV, MAX_INDIVIDUAL_IV, MAX_POSSIBLE_EVS } from 'contract';
import { NATURES } from 'pokemon-info';
import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';
import { Input, Progress, Slider, Typography } from 'ui';
import { useTeamStore } from '../../../../state/team';
import type { FilledSlot } from '../../../../state/team/helpers';
import { calculateStat, getShortStatName, getTotalEvs } from '../../../../utils/pokemon';

interface StatsFieldsProps {
  slot: FilledSlot;
}

export default function StatsFields({ slot }: StatsFieldsProps): JSX.Element {
  const [setSlotFieldValue] = useTeamStore((state) => [state.setSlotFieldValue]);

  const totalEvs = getTotalEvs(slot);

  function handleEvChange(stat: EvFieldName, value: number): void {
    setSlotFieldValue(slot, stat, value);
  }

  function handleIvChange(stat: IvFieldName, value: number): void {
    setSlotFieldValue(slot, stat, value);
  }

  const nature = NATURES.find((nat) => nat.name === slot.natureName) || { increased: null, decreased: null }; // DEFAULT: docile nature

  return (
    <div className='flex flex-col w-full gap-1'>
      <StatsHeader />
      <StatField
        base={slot.pokemon.baseHp}
        ev={slot.evHp}
        iv={slot.ivHp}
        level={slot.level}
        nature={nature}
        onChangeEv={(value) => {
          handleEvChange('evHp', value);
        }}
        onChangeIv={(value) => {
          handleIvChange('ivHp', value);
        }}
        statName='hp'
        totalEvs={totalEvs}
      />
      <StatField
        base={slot.pokemon.baseAttack}
        ev={slot.evAttack}
        iv={slot.ivAttack}
        level={slot.level}
        nature={nature}
        onChangeEv={(value) => {
          handleEvChange('evAttack', value);
        }}
        onChangeIv={(value) => {
          handleIvChange('ivAttack', value);
        }}
        statName='attack'
        totalEvs={totalEvs}
      />
      <StatField
        base={slot.pokemon.baseDefense}
        ev={slot.evDefense}
        iv={slot.ivDefense}
        level={slot.level}
        nature={nature}
        onChangeEv={(value) => {
          handleEvChange('evDefense', value);
        }}
        onChangeIv={(value) => {
          handleIvChange('ivDefense', value);
        }}
        statName='defense'
        totalEvs={totalEvs}
      />
      <StatField
        base={slot.pokemon.baseSpattack}
        ev={slot.evSpAttack}
        iv={slot.ivSpAttack}
        level={slot.level}
        nature={nature}
        onChangeEv={(value) => {
          handleEvChange('evSpAttack', value);
        }}
        onChangeIv={(value) => {
          handleIvChange('ivSpAttack', value);
        }}
        statName='spattack'
        totalEvs={totalEvs}
      />
      <StatField
        base={slot.pokemon.baseSpdefense}
        ev={slot.evSpDefense}
        iv={slot.ivSpDefense}
        level={slot.level}
        nature={nature}
        onChangeEv={(value) => {
          handleEvChange('evSpDefense', value);
        }}
        onChangeIv={(value) => {
          handleIvChange('ivSpDefense', value);
        }}
        statName='spdefense'
        totalEvs={totalEvs}
      />
      <StatField
        base={slot.pokemon.baseSpeed}
        ev={slot.evSpeed}
        iv={slot.ivSpeed}
        level={slot.level}
        nature={nature}
        onChangeEv={(value) => {
          handleEvChange('evSpeed', value);
        }}
        onChangeIv={(value) => {
          handleIvChange('ivSpeed', value);
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
  nature: Pick<CompleteNature, 'increased' | 'decreased'>;
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
