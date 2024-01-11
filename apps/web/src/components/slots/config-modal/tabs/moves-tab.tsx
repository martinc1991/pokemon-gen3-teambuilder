import { client } from '@rq-client/index';
import { useTeamStore } from '@state/team';
import clsx from 'clsx';
import { LocalSlot } from 'contract';
import { useEffect, useMemo, useState } from 'react';
import { FormField, Separator, TypeBadge, Typography } from 'ui';

export const MOVES_TAB_NAME = 'moves';

interface TabProps {
  slot: LocalSlot;
}

function replaceElementInArray<T>(arr: T[], elem: T, index: number): T[] {
  const newArr = [...arr];
  newArr[index] = elem;
  return newArr;
}

function getMoveSlotIndex(nameField: MovesNameFields): MoveSlotIndex {
  switch (nameField) {
    case MovesNameFields.ONE:
      return 0;
    case MovesNameFields.TWO:
      return 1;
    case MovesNameFields.THREE:
      return 2;
    case MovesNameFields.FOUR:
      return 3;
  }
}

type MoveSlotIndex = 0 | 1 | 2 | 3;

const enum MovesNameFields {
  ONE = 'moveOneName',
  TWO = 'moveTwoName',
  THREE = 'moveThreeName',
  FOUR = 'moveFourName',
}

export function MovesTab({ slot }: TabProps): JSX.Element {
  const [filter, setFilter] = useState('');
  const [selectedMoveIndex, setSelectedMoveIndex] = useState<MoveSlotIndex>(0);
  const [setSlotFieldValue] = useTeamStore((state) => [state.setSlotFieldValue]);

  const [moveOneName, setMoveOneName] = useState('');
  const [moveTwoName, setMoveTwoName] = useState('');
  const [moveThreeName, setMoveThreeName] = useState('');
  const [moveFourName, setMoveFourName] = useState('');

  const selectedMovesNames = [slot.moves[0] || '', slot.moves[1] || '', slot.moves[2] || '', slot.moves[3] || ''];

  useEffect(() => {
    setMoveOneName(slot.moves[0] || '');
    setMoveTwoName(slot.moves[1] || '');
    setMoveThreeName(slot.moves[2] || '');
    setMoveFourName(slot.moves[3] || '');
  }, []);

  const { isError, isLoading, data } = client.pokemon.getOne.useQuery([`get-one-pokemon-${slot.species}`], {
    params: { nationalDexNumber: slot.nationalPokedexNumber.toString() },
  });

  // Learnset
  const learnsetMovesNames = useMemo(() => data?.body.learnset.map((move) => move.name), [data?.body]) || [];

  function handleFilter(e: React.ChangeEvent<HTMLInputElement>): void {
    setFilter(e.target.value.toLowerCase());

    if (learnsetMovesNames.includes(e.target.value.toLowerCase())) {
      // CASE: the move belongs to this pokemon learnset
      const newMoves = replaceElementInArray(slot.moves, e.target.value.toLowerCase(), selectedMoveIndex);
      setSlotFieldValue(slot.meta.id, 'moves', newMoves);
    } else {
      const newMoves = replaceElementInArray(slot.moves, '', selectedMoveIndex);
      setSlotFieldValue(slot.meta.id, 'moves', newMoves);
    }
  }

  function handleAddMove(moveFieldName: MoveSlotIndex, moveName: string): void {
    const newMoves = replaceElementInArray(slot.moves, moveName, moveFieldName);

    setSlotFieldValue(slot.meta.id, 'moves', newMoves);
    if (selectedMoveIndex === 0) {
      setMoveOneName(moveName);
      document.getElementById(MovesNameFields.TWO)?.focus();
    }
    if (selectedMoveIndex === 1) {
      setMoveTwoName(moveName);
      document.getElementById(MovesNameFields.THREE)?.focus();
    }
    if (selectedMoveIndex === 2) {
      setMoveThreeName(moveName);
      document.getElementById(MovesNameFields.FOUR)?.focus();
    }
    if (selectedMoveIndex === 3) {
      setMoveFourName(moveName);
    }
  }

  function handleFocus(e: React.FocusEvent<HTMLInputElement>): void {
    const a = getMoveSlotIndex(e.target.id as MovesNameFields);
    setSelectedMoveIndex(a);
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setMoveOneName(e.target.value.toLowerCase());
            handleFilter(e);
          }}
          onFocus={handleFocus}
          placeholder='Move 1'
          value={moveOneName}
        />
        <FormField.Text
          id={MovesNameFields.TWO}
          inputClassname='capitalize'
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
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
                    selectedMovesNames.includes(move.name) ? 'bg-green-800' : 'hover:bg-green-600 hover:cursor-pointer',
                  )}
                  key={`${move.id}`}
                  onClick={() => {
                    if (!selectedMovesNames.includes(move.name)) handleAddMove(selectedMoveIndex, move.name);
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
