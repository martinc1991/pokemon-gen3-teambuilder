import { useSlotConfigModalStore } from '@state/slot-config-modal';
import { Separator, Typography } from 'ui';
import AbilityField from '../fields/ability';
import GenderField from '../fields/gender';
import HappinessField from '../fields/happiness';
import ItemField from '../fields/item';
import LevelField from '../fields/level';
import NameField from '../fields/name';
import NatureField from '../fields/nature';
import ShinyField from '../fields/shiny';
import StatsFields from '../fields/stats';

export const BASIC_TAB_NAME = 'basic';

export function BasicTab(): JSX.Element {
  const pokemon = useSlotConfigModalStore((state) => state.pokemon);
  const slot = useSlotConfigModalStore((state) => state.slot);

  if (!pokemon || !slot) return <></>;

  return (
    <div className='flex flex-col items-start w-full gap-4'>
      <Typography.H4 className='truncate'>Basic</Typography.H4>
      <div className='flex items-center w-full gap-4'>
        <NameField slot={slot} />
        <ShinyField slot={slot} />
      </div>
      <div className='flex flex-col items-center justify-between w-full gap-4 sm:flex-row'>
        <GenderField slot={slot} pokemon={pokemon} />
        <LevelField slot={slot} />
        <HappinessField slot={slot} />
      </div>
      <div className='flex items-center w-full gap-4' />

      <Separator />

      <div className='flex flex-col items-start w-full gap-4'>
        <Typography.H4 className='truncate'>Abilitiy, item and nature</Typography.H4>
        <div className='flex flex-col items-start w-full gap-4 sm:flex-row sm:items-center'>
          <AbilityField slot={slot} pokemon={pokemon} />
          <ItemField slot={slot} />
        </div>
        <div className='flex items-center w-full gap-4'>
          <NatureField slot={slot} />
        </div>
      </div>

      <Separator />

      <div className='flex flex-col items-start w-full gap-4'>
        <Typography.H4>Stats (EVs, IVs)</Typography.H4>

        <StatsFields slot={slot} pokemon={pokemon} />
      </div>
    </div>
  );
}
