import { LocalSlot, PokemonWithAbilitiesAndLearnset } from 'contract';
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

interface BasicTabProps {
  slot: LocalSlot;
  pokemon: PokemonWithAbilitiesAndLearnset;
}

export function BasicTab(props: BasicTabProps): JSX.Element {
  return (
    <div className='flex flex-col items-start w-full gap-4'>
      <Typography.H4 className='truncate'>Basic</Typography.H4>
      <div className='flex items-center w-full gap-4'>
        <NameField slotId={props.slot.meta.id} nickname={props.slot.nickname} />
        <ShinyField slotId={props.slot.meta.id} shiny={props.slot.shiny} />
      </div>
      <div className='flex flex-col items-center justify-between w-full gap-4 sm:flex-row'>
        <GenderField slotId={props.slot.meta.id} pokemon={props.pokemon} gender={props.slot.gender} />
        <LevelField slotId={props.slot.meta.id} level={props.slot.level} />
        <HappinessField slotId={props.slot.meta.id} happiness={props.slot.happiness} />
      </div>
      <div className='flex items-center w-full gap-4' />

      <Separator />

      <div className='flex flex-col items-start w-full gap-4'>
        <Typography.H4 className='truncate'>Abilitiy, item and nature</Typography.H4>
        <div className='flex flex-col items-start w-full gap-4 sm:flex-row sm:items-center'>
          <AbilityField slotId={props.slot.meta.id} pokemon={props.pokemon} abilityName={props.slot.abilityName} />
          <ItemField slotId={props.slot.meta.id} itemName={props.slot.itemName} pokemon={props.pokemon} />
        </div>
        <div className='flex items-center w-full gap-4'>
          <NatureField slotId={props.slot.meta.id} natureName={props.slot.natureName} />
        </div>
      </div>

      <Separator />

      <div className='flex flex-col items-start w-full gap-4'>
        <Typography.H4>Stats (EVs, IVs)</Typography.H4>

        <StatsFields
          slotId={props.slot.meta.id}
          pokemon={props.pokemon}
          evs={props.slot.evs}
          ivs={props.slot.ivs}
          level={props.slot.level}
          natureName={props.slot.natureName}
        />
      </div>
    </div>
  );
}
