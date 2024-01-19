import LoadingState from '@components/loading-state';
import { client } from '@rq-client/index';
import withTeamStore, { WithTeamStoreProps } from '@state/team/with-team-store';
import { LocalSlot } from 'contract';
import React from 'react';
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  PokemonSprite,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TypeBadge,
  Typography,
} from 'ui';
import { getPokemonSpriteUrl } from 'utils';
import { BASIC_TAB_NAME, BasicTab } from './tabs/basic-tab';
import { MOVES_TAB_NAME, MovesTab } from './tabs/moves-tab';
import { getCardTitle } from '@utils/get-card-title';

interface SlotConfigModalProps extends WithTeamStoreProps {}

function SlotConfigModal({ teamStore }: SlotConfigModalProps): React.ReactNode {
  const { selectedSlotIndex, slots } = teamStore;

  const selectedSlot = slots[selectedSlotIndex];

  return (
    <DialogContent className='max-w-5xl flex flex-col justify-start gap-4 h-[90%]'>
      {!selectedSlot ? <LoadingState /> : <ModalContent slot={selectedSlot} />}
    </DialogContent>
  );
}

export default withTeamStore(SlotConfigModal);

interface ModalContentProps {
  slot: LocalSlot;
}

function ModalContent(props: ModalContentProps): JSX.Element {
  const { isError, isLoading, data } = client.pokemon.getOne.useQuery([`get-one-pokemon-${props.slot.nationalPokedexNumber}`], {
    params: { nationalDexNumber: props.slot.nationalPokedexNumber.toString() },
  });

  if (isLoading) return <LoadingState />;
  if (isError) return <p>error...</p>;

  const pokemon = data.body;

  return (
    <>
      <div className='flex flex-row gap-4'>
        <PokemonSprite url={getPokemonSpriteUrl(props.slot.nationalPokedexNumber)} />
        <DialogHeader className='overflow-auto flex-1'>
          <div className='flex items-center justify-between gap-5'>
            <Typography.H3 className='truncate'>{getCardTitle({ ...props.slot }, 0)}</Typography.H3>
            <div className='flex gap-2 mr-5'>
              <TypeBadge type={pokemon.typeOneName} />
              {pokemon.typeTwoName !== 'empty' && <TypeBadge type={pokemon.typeTwoName} />}
            </div>
          </div>
          <DialogDescription>Customize your pokemon here. No need to save.</DialogDescription>
        </DialogHeader>
      </div>

      <Tabs defaultValue={BASIC_TAB_NAME}>
        <TabsList className='grid w-full grid-cols-2'>
          <TabsTrigger value={BASIC_TAB_NAME}>Basic</TabsTrigger>
          <TabsTrigger value={MOVES_TAB_NAME}>Moves</TabsTrigger>
        </TabsList>
        <TabsContent value={BASIC_TAB_NAME}>
          <BasicTab pokemon={pokemon} slot={props.slot} />
        </TabsContent>
        <TabsContent value={MOVES_TAB_NAME}>
          <MovesTab slot={props.slot} />
        </TabsContent>
      </Tabs>
    </>
  );
}
