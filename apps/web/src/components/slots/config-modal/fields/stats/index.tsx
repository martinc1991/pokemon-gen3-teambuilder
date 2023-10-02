import { naturesArray, type EvFieldName, type IvFieldName } from 'contract';
import { Typography } from 'ui';
import { useTeamStore } from '../../../../../state/team';
import type { FilledSlot } from '../../../../../state/team/helpers';
import { getTotalEvs } from '../../../../../utils/pokemon';
import StatField, { StatsHeader } from './components/stat-field';

interface SlotStatsFieldsProps {
  slot: FilledSlot;
}

export default function SlotStatsFields({ slot }: SlotStatsFieldsProps): JSX.Element {
  const [setSlotFieldValue] = useTeamStore((state) => [state.setSlotFieldValue]);

  const totalEvs = getTotalEvs(slot);

  function handleEvChange(stat: EvFieldName, value: number): void {
    setSlotFieldValue(slot, stat, value);
  }

  function handleIvChange(stat: IvFieldName, value: number): void {
    setSlotFieldValue(slot, stat, value);
  }

  const nature = naturesArray.find((nat) => nat.name === slot.natureName) || { increased: null, decreased: null }; // DEFAULT: docile nature

  return (
    <>
      <div>
        <Typography.H4>Stats</Typography.H4>
      </div>
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
    </>
  );
}
