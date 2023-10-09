import { DialogContent, DialogDescription, DialogHeader, Separator, TypeBadge, Typography } from 'ui';
import { useTeamStore } from '../../../state/team';
import { getCardTitleName } from '../cards/utils/get-card-title';
import AbilityField from './fields/ability';
import GenderField from './fields/gender';
import HappinessField from './fields/happiness';
import ItemField from './fields/item';
import LevelField from './fields/level';
import NameField from './fields/name';
import NatureField from './fields/nature';
import ShinyField from './fields/shiny';
import StatsFields from './fields/stats';

export default function SlotConfigModal(): JSX.Element {
  const [slot] = useTeamStore((state) => [state.slots[state.selectedSlotIndex]]);

  return (
    <DialogContent className='max-w-4xl'>
      <DialogHeader className='overflow-auto'>
        <div className='flex items-center justify-between gap-5'>
          <Typography.H3 className='truncate'>{getCardTitleName({ ...slot })}</Typography.H3>
          <div className='flex gap-2 mr-5'>
            <TypeBadge type={slot.pokemon.typeOneName} />
            {slot.pokemon.typeTwoName !== 'empty' && <TypeBadge type={slot.pokemon.typeTwoName} />}
          </div>
        </div>
        <DialogDescription>Customize your pokemon here. No need to save.</DialogDescription>
      </DialogHeader>
      <div className='flex flex-col items-start w-full gap-4'>
        <Typography.H4 className='truncate'>Basic</Typography.H4>
        <div className='flex items-center w-full gap-4'>
          <NameField slot={slot} />
          <ShinyField slot={slot} />
        </div>
        <div className='flex flex-col items-center justify-between w-full gap-4 sm:flex-row'>
          <GenderField slot={slot} />
          <LevelField slot={slot} />
          <HappinessField slot={slot} />
        </div>
        <div className='flex items-center w-full gap-4' />

        <Separator />

        <Typography.H4 className='truncate'>Abilitiy, item and nature</Typography.H4>
        <div className='flex flex-col items-start w-full gap-4 sm:flex-row sm:items-center'>
          <AbilityField slot={slot} />
          <ItemField slot={slot} />
        </div>
        <div className='flex items-center w-full gap-4'>
          <NatureField slot={slot} />
        </div>
      </div>

      <Separator />

      <Typography.H4>Stats (EVs, IVs)</Typography.H4>

      <StatsFields slot={slot} />
    </DialogContent>
  );
}
