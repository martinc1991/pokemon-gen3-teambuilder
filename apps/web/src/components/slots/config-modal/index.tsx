import { useEffect, useMemo, useState } from 'react';
import {
  DialogContent,
  DialogDescription,
  DialogHeader,
  FormField,
  Separator,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  TypeBadge,
  Typography,
} from 'ui';
import clsx from 'clsx';
import { client } from '../../../rq-client';
import { useTeamStore } from '../../../state/team';
import type { FilledSlot } from '../../../state/team/helpers';
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

      <Tabs defaultValue='account'>
        <TabsList className='grid w-full grid-cols-2'>
          <TabsTrigger value='account'>Basic</TabsTrigger>
          <TabsTrigger value='password'>Moves</TabsTrigger>
        </TabsList>
        <TabsContent value='account'>
          <BasicTab slot={slot} />
        </TabsContent>
        <TabsContent value='password'>
          <MovesTab slot={slot} />
        </TabsContent>
      </Tabs>
    </DialogContent>
  );
}

interface TabProps {
  slot: FilledSlot;
}

function BasicTab({ slot }: TabProps): JSX.Element {
  return (
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

      <div className='flex flex-col items-start w-full gap-4'>
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

      <div className='flex flex-col items-start w-full gap-4'>
        <Typography.H4>Stats (EVs, IVs)</Typography.H4>

        <StatsFields slot={slot} />
      </div>
    </div>
  );
}

const enum MovesNameFields {
  ONE = 'moveOneName',
  TWO = 'moveTwoName',
  THREE = 'moveThreeName',
  FOUR = 'moveFourName',
}

function MovesTab({ slot }: TabProps): JSX.Element {
  const [filter, setFilter] = useState('');
  const [selectedMoveField, setSelectedMoveField] = useState<MovesNameFields>(MovesNameFields.ONE);
  const [setSlotFieldValue] = useTeamStore((state) => [state.setSlotFieldValue]);

  const [moveOneName, setMoveOneName] = useState('');
  const [moveTwoName, setMoveTwoName] = useState('');
  const [moveThreeName, setMoveThreeName] = useState('');
  const [moveFourName, setMoveFourName] = useState('');

  const selectedMovesNames = [slot.moveOneName, slot.moveTwoName, slot.moveThreeName, slot.moveFourName];

  useEffect(() => {
    setMoveOneName(slot.moveOneName || '');
    setMoveTwoName(slot.moveTwoName || '');
    setMoveThreeName(slot.moveThreeName || '');
    setMoveFourName(slot.moveFourName || '');
  }, []);

  const { isError, isLoading, data } = client.pokemon.getOne.useQuery([`load-${slot.pokemon.name}-learnset`], {
    params: { nationalDexNumber: slot.nationalPokedexNumber.toString() },
  });

  const movesNames = useMemo(() => data?.body.learnset.map((move) => move.name), [data?.body]) || [];

  function handleFilter(e: React.ChangeEvent<HTMLInputElement>): void {
    setFilter(e.target.value.toLowerCase());

    if (movesNames.includes(e.target.value.toLowerCase())) {
      setSlotFieldValue(slot, selectedMoveField, e.target.value.toLowerCase());
    } else {
      setSlotFieldValue(slot, selectedMoveField, '');
    }
  }

  function handleAddMove(moveFieldName: MovesNameFields, moveName: string): void {
    setSlotFieldValue(slot, moveFieldName, moveName);
    if (selectedMoveField === MovesNameFields.ONE) {
      setMoveOneName(moveName);
      document.getElementById(MovesNameFields.TWO)?.focus();
    }
    if (selectedMoveField === MovesNameFields.TWO) {
      setMoveTwoName(moveName);
      document.getElementById(MovesNameFields.THREE)?.focus();
    }
    if (selectedMoveField === MovesNameFields.THREE) {
      setMoveThreeName(moveName);
      document.getElementById(MovesNameFields.FOUR)?.focus();
    }
    if (selectedMoveField === MovesNameFields.FOUR) {
      setMoveFourName(moveName);
    }
  }

  function handleFocus(e: React.FocusEvent<HTMLInputElement>): void {
    setSelectedMoveField(e.target.id as MovesNameFields);
  }

  if (isError) return <div>Error</div>;
  if (isLoading) return <div>Loading...</div>;

  return (
    <div className='flex flex-col items-start w-full gap-4'>
      <Typography.H4>Moves</Typography.H4>

      <div className='flex justify-between w-full gap-4 mb-6'>
        <FormField.Text
          autoFocus
          id={MovesNameFields.ONE}
          inputClassname='capitalize'
          onChange={(e) => {
            setMoveOneName(e.target.value.toLowerCase().toLowerCase());
            handleFilter(e);
          }}
          onFocus={handleFocus}
          placeholder='Move 1'
          value={moveOneName}
        />
        <FormField.Text
          id={MovesNameFields.TWO}
          inputClassname='capitalize'
          onChange={(e) => {
            setMoveTwoName(e.target.value.toLowerCase());
            handleFilter(e);
          }}
          onFocus={handleFocus}
          placeholder='Move 2'
          value={moveTwoName}
        />
        <FormField.Text
          id={MovesNameFields.THREE}
          inputClassname='capitalize'
          onChange={(e) => {
            setMoveThreeName(e.target.value.toLowerCase());
            handleFilter(e);
          }}
          onFocus={handleFocus}
          placeholder='Move 3'
          value={moveThreeName}
        />
        <FormField.Text
          id={MovesNameFields.FOUR}
          inputClassname='capitalize'
          onChange={(e) => {
            setMoveFourName(e.target.value.toLowerCase().toLowerCase());
            handleFilter(e);
          }}
          onFocus={handleFocus}
          placeholder='Move 4'
          value={moveFourName}
        />
      </div>

      <div className='flex flex-col items-start w-full'>
        <div className='flex justify-between w-full gap-4 px-2 h-7'>
          <div className='flex-1 max-w-[170px]'>
            <Typography.Muted>Name</Typography.Muted>
          </div>
          <div className='flex-1 max-w-[50px] text-center'>
            <Typography.Muted />
          </div>
          <div className='flex-1 max-w-[40px] text-center'>
            <Typography.Muted>Power</Typography.Muted>
          </div>
          <div className='flex-1 max-w-[40px] text-center'>
            <Typography.Muted>Acc</Typography.Muted>
          </div>
          <div className='flex-1 max-w-[60px] text-center'>
            <Typography.Muted />
          </div>
          <div className='flex-1'>
            <Typography.Muted>Description</Typography.Muted>
          </div>
        </div>
        <Separator />
        <div className='flex flex-col w-full overflow-scroll h-[550px] gap-1'>
          {data.body.learnset
            .filter((move) => {
              if (filter.trim().length === 0) return true;
              return move.name.includes(filter) || move.type.includes(filter);
            })
            .map((move) => {
              return (
                <div
                  aria-hidden='true'
                  className={clsx(
                    'flex gap-4 min-h-[40px] px-2 items-center rounded-md mr-2',
                    selectedMovesNames.includes(move.name) ? 'bg-green-800' : 'hover:bg-green-600 hover:cursor-pointer'
                  )}
                  key={`${move.id}`}
                  onClick={() => {
                    if (!selectedMovesNames.includes(move.name)) handleAddMove(selectedMoveField, move.name);
                    setFilter('');
                  }}
                >
                  <div className='flex-1 max-w-[170px] capitalize'>
                    <Typography.Small>{move.name}</Typography.Small>
                  </div>
                  <div className='flex-1 max-w-[50px] capitalize text-center'>
                    <Typography.Small>{move.damageClass}</Typography.Small>
                  </div>
                  <div className='flex-1 max-w-[40px] text-center'>
                    <Typography.Small>{move.power || '-'}</Typography.Small>
                  </div>
                  <div className='flex-1 max-w-[40px] text-center'>
                    <Typography.Small>{move.accuracy || '-'}</Typography.Small>
                  </div>
                  <div className='flex-1 max-w-[60px] flex justify-center'>
                    <TypeBadge type={move.type} />
                  </div>
                  <div className='flex-1'>
                    <Typography.P className='text-sm'>{move.description}</Typography.P>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
}
