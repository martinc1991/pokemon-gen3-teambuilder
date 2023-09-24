'use client';

import { cn } from '@/lib/utils';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
import * as React from 'react';
import { Button } from '../button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '../command/command';
import { Popover, PopoverContent, PopoverTrigger } from '../popover/popover';
import { Muted, Word } from '../typography';

interface ComboboxProps {
  data: { id: string; label: string }[];
  placeholder?: string;
  searchBox?: boolean;
}

export function Combobox({ searchBox = false, ...props }: ComboboxProps) {
  const [open, setOpen] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState('');

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant='outline' role='combobox' aria-expanded={open} className='justify-between w-[200px]'>
          <SelectedValue {...props} selectedId={selectedId} />
          <CaretSortIcon className='w-4 h-4 ml-2 opacity-50 shrink-0' />
        </Button>
      </PopoverTrigger>
      <PopoverContent className='w-auto min-w-[200px] p-0'>
        <Command>
          {searchBox && <CommandInput placeholder='Search...' className='h-9' />}
          {searchBox && <CommandEmpty>No results found.</CommandEmpty>}
          <CommandGroup>
            {props.data.map((item) => (
              <CommandItem
                key={item.id}
                onSelect={() => {
                  // TODO: Add optional option here
                  // setValue(currentValue === value ? '' : currentValue);
                  setSelectedId(item.id);
                  setOpen(false);
                }}
              >
                <Word>{item.label}</Word>
                <CheckIcon className={cn('ml-auto h-4 w-4', selectedId === item.id ? 'opacity-100' : 'opacity-0')} />
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

interface SelectedValueSelectedValueProps extends ComboboxProps {
  selectedId: string;
}

function SelectedValue(props: SelectedValueSelectedValueProps) {
  const text = props.data.find((item) => {
    return item.id === props.selectedId;
  })?.label;

  return (
    <div className='py-1'>
      {text ? <Word>{text}</Word> : props.placeholder ? <Muted>{props.placeholder}</Muted> : <Muted>Select...</Muted>}
    </div>
  );
}
