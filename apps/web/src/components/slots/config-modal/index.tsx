import withTeamStore, { WithTeamStoreProps } from '@state/hoc/with-team-store';
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
import { getCardTitleName } from '../cards/utils/get-card-title';
import { BASIC_TAB_NAME, BasicTab } from './tabs/basic-tab';
import { MOVES_TAB_NAME, MovesTab } from './tabs/moves-tab';

interface SlotConfigModalProps extends WithTeamStoreProps {}

function SlotConfigModal({ teamStore }: SlotConfigModalProps): React.ReactNode {
  const { slots, selectedSlotIndex } = teamStore;

  const slot = slots[selectedSlotIndex];

  return (
    <DialogContent className='max-w-5xl flex flex-col justify-start gap-4 min-h-[90%]'>
      <div className='flex flex-row gap-4'>
        <PokemonSprite pokemon={slot.pokemon} />
        <DialogHeader className='overflow-auto flex-1'>
          <div className='flex items-center justify-between gap-5'>
            <Typography.H3 className='truncate'>{getCardTitleName({ ...slot })}</Typography.H3>
            <div className='flex gap-2 mr-5'>
              <TypeBadge type={slot.pokemon.typeOneName} />
              {slot.pokemon.typeTwoName !== 'empty' && <TypeBadge type={slot.pokemon.typeTwoName} />}
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
          <BasicTab slot={slot} />
        </TabsContent>
        <TabsContent value={MOVES_TAB_NAME}>
          <MovesTab slot={slot} />
        </TabsContent>
      </Tabs>
    </DialogContent>
  );
}

export default withTeamStore(SlotConfigModal);
