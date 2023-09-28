import { Typography } from 'ui';
import { client } from '../../../../../../rq-client';
import { useTeamStore } from '../../../../../../state/team';
import type { FilledSlot } from '../../../../../../state/team/helpers';
import StatField from './components/stat-field';

interface SlotStatsFieldsProps {
  slot: FilledSlot;
}

type EvFieldName = keyof Pick<FilledSlot, 'evAttack' | 'evDefense' | 'evHp' | 'evSpAttack' | 'evSpDefense' | 'evSpeed'>;
// type IvFieldName = keyof Pick<FilledSlot, 'ivAttack' | 'ivDefense' | 'ivHp' | 'ivSpAttack' | 'ivSpDefense' | 'ivSpeed'>; // TODO:

export default function SlotStatsFields({ slot }: SlotStatsFieldsProps): JSX.Element {
  const { data, isFetching, error, isLoading } = client.natures.getAll.useQuery(['all-natures']);
  const [setSlotFieldValue] = useTeamStore((state) => [state.setSlotFieldValue]);

  function handleEvChange(stat: EvFieldName, value: number): void {
    setSlotFieldValue(slot, stat, value);
  }

  if (error) return <div>error</div>;
  if (isLoading || isFetching) return <div>loading</div>;

  const nature = data.body.find((nat) => nat.name === slot.natureName) || { increased: null, decreased: null }; // INFO: default value TODO: make a hook

  return (
    <>
      <div>
        <Typography.H4>Stats</Typography.H4>
      </div>
      <div className='flex flex-col w-full gap-1'>
        <StatField
          base={slot.pokemon.baseHp}
          ev={slot.evHp}
          iv={31} // HARDCODED:
          level={slot.level}
          nature={nature}
          onChangeEv={(value) => {
            handleEvChange('evHp', value);
          }}
          statName='hp'
        />
        <StatField
          base={slot.pokemon.baseAttack}
          ev={slot.evAttack}
          iv={31} // HARDCODED:
          level={slot.level}
          nature={nature}
          onChangeEv={(value) => {
            handleEvChange('evAttack', value);
          }}
          statName='attack'
        />
        <StatField
          base={slot.pokemon.baseDefense}
          ev={slot.evDefense}
          iv={31} // HARDCODED:
          level={slot.level}
          nature={nature}
          onChangeEv={(value) => {
            handleEvChange('evDefense', value);
          }}
          statName='defense'
        />
        <StatField
          base={slot.pokemon.baseSpattack}
          ev={slot.evSpAttack}
          iv={31} // HARDCODED:
          level={slot.level}
          nature={nature}
          onChangeEv={(value) => {
            handleEvChange('evSpAttack', value);
          }}
          statName='spattack'
        />
        <StatField
          base={slot.pokemon.baseSpdefense}
          ev={slot.evSpDefense}
          iv={31} // HARDCODED:
          level={slot.level}
          nature={nature}
          onChangeEv={(value) => {
            handleEvChange('evSpDefense', value);
          }}
          statName='spdefense'
        />
        <StatField
          base={slot.pokemon.baseSpeed}
          ev={slot.evSpeed}
          iv={31} // HARDCODED:
          level={slot.level}
          nature={nature}
          onChangeEv={(value) => {
            handleEvChange('evSpeed', value);
          }}
          statName='speed'
        />
      </div>
    </>
  );
}
