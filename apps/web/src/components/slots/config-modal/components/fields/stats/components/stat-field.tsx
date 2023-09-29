import type { CompleteNature, StatName } from 'contract';
import type { ChangeEvent } from 'react';
import { useEffect, useState } from 'react';
import { Input, Progress, Slider, Typography } from 'ui';
import { calculateStat, getShortStatName } from '../../../../../../../utils/pokemon';

interface SlotStatFieldProps {
  statName: StatName;
  base: number;
  ev: number;
  iv: number;
  level: number;
  nature: Pick<CompleteNature, 'increased' | 'decreased'>;
  onChangeEv?: (value: number) => void;
  onChangeIv?: (value: number) => void;
}

const evsLimits = { max: 252, min: 0 };
const ivsLimits = { max: 31, min: 0 };

export default function StatField(props: SlotStatFieldProps): JSX.Element {
  const total = calculateStat(props);
  const [evs, setEvs] = useState(props.ev);

  useEffect(() => {
    setEvs(props.ev);
  }, [props.ev]);

  const progress = (total / 714) * 100; // TODO: extract to constant, also make it logarithmic

  // EVs handlers
  function handleEvOnChangeInput(e: ChangeEvent<HTMLInputElement>): void {
    handleEvOnChangeSlider([parseInt(e.target.value)]);
  }
  function handleEvOnChangeSlider([value]: [number]): void {
    setEvs(value);
  }
  function handleEvOnCommit([value]: [number]): void {
    // This callback should be used to handle cases when the thumb goes further than disabled state allows it (because there a delay (bug) that allows it to do so)
    if (props.onChangeEv) {
      props.onChangeEv(value);
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
        <Input className='w-[80px] h-[30px]' {...evsLimits} onChange={handleEvOnChangeInput} type='number' value={evs} />
        <Slider {...evsLimits} onValueChange={handleEvOnChangeSlider} onValueCommit={handleEvOnCommit} value={[evs]} />
      </div>
      <div className='flex items-center justify-center flex-[1]'>
        <Input className='w-[70px] h-[30px]' {...ivsLimits} onChange={handleIvOnChange} type='number' value={props.iv} />
      </div>
      <div className='flex items-center justify-center w-12'>
        <Typography.Small>{total}</Typography.Small>
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
