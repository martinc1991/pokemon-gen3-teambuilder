import type { CompleteNature, StatName } from 'contract';
import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';
import { Input, Progress, Slider, Typography } from 'ui';
import { MAX_POSSIBLE_EVS, calculateStat, getShortStatName } from '../../../../../../../utils/pokemon';

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

const evsLimits = { max: 252, min: 0 };
const ivsLimits = { max: 31, min: 0 };

export default function StatField(props: SlotStatFieldProps): JSX.Element {
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
      <div className='flex items-center justify-center flex-[1]'>
        <Input className='w-[70px] h-[30px]' {...ivsLimits} onChange={handleIvOnChange} type='number' value={props.iv} />
      </div>
      <div className='flex items-center justify-center w-12'>
        <Typography.Small>{statTotal}</Typography.Small>
      </div>
    </div>
  );
}

export function StatsHeader(): JSX.Element {
  return (
    <div className='flex items-center w-full gap-2 mb-3'>
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
      <div className='text-center w-[70px]'>
        <Typography.Muted>IVs</Typography.Muted>
      </div>
      <div className='flex items-center justify-center w-12'>
        <Typography.Muted>Total</Typography.Muted>
      </div>
    </div>
  );
}
