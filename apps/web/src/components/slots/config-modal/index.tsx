import { useTeamStore } from '@state/team';
import { DialogContent, DialogDescription, DialogHeader, Tabs, TabsContent, TabsList, TabsTrigger, TypeBadge, Typography } from 'ui';
import { getCardTitleName } from '../cards/utils/get-card-title';
import { BASIC_TAB_NAME, BasicTab } from './tabs/basic-tab';
import { MOVES_TAB_NAME, MovesTab } from './tabs/moves-tab';

export default function SlotConfigModal(): JSX.Element {
  const [slot] = useTeamStore((state) => [state.slots[state.selectedSlotIndex]]);

  return (
    <DialogContent className='max-w-5xl flex flex-col justify-start gap-4 min-h-[90%]'>
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
