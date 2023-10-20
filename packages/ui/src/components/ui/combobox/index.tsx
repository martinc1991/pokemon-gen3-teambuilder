import { cn } from '@/lib/utils';
import { CaretSortIcon, CheckIcon } from '@radix-ui/react-icons';
import clsx from 'clsx';
import * as React from 'react';
import { Button } from '../button';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '../command/command';
import { Popover, PopoverContent, PopoverTrigger } from '../popover/popover';
import { Muted, Word } from '../typography';
import { ComboboxItem, ComboboxProps } from './helpers/types';

export function Combobox<T>({
  className = '',
  clearButtonClassName = '',
  cleareable = false,
  clearDisabled = false,
  clearText,
  itemsClassName = '',
  onChange = () => {},
  onClear = () => {},
  searchBox = false,
  ...props
}: ComboboxProps<T>) {
  const [open, setOpen] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState(props.value?.id || '');

  React.useEffect(() => {
    if (props.value) {
      setSelectedId(props.value.id);
    } else {
      setSelectedId('');
    }
  }, [props.value]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant='outline'
          role='combobox'
          disabled={props.disabled}
          aria-expanded={open}
          className={clsx('justify-between capitalize min-w-max', className)}
        >
          <SelectedValue {...props} selectedId={selectedId} />
          <CaretSortIcon className='w-4 h-4 ml-2 opacity-50 shrink-0' />
        </Button>
      </PopoverTrigger>
      {cleareable && (
        <Button
          variant='link'
          disabled={Boolean(selectedId === '') || clearDisabled}
          onClick={() => {
            onClear(props.data.find((i) => i.id === selectedId) as ComboboxItem<T>);
            setSelectedId('');
          }}
          className={clearButtonClassName}
        >
          {clearText || 'Clear'}
        </Button>
      )}
      <PopoverContent className='w-auto min-w-[200px] p-0'>
        <Command>
          {searchBox && <CommandInput placeholder='Search...' className='h-9' />}
          {searchBox && <CommandEmpty>No results found.</CommandEmpty>}
          <CommandGroup>
            {props.data.map((item) => (
              <CommandItem
                key={item.id}
                onSelect={() => {
                  setSelectedId(item.id);
                  onChange(item);
                  setOpen(false);
                }}
                className={itemsClassName}
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

interface SelectedValueSelectedValueProps<T> extends ComboboxProps<T> {
  selectedId: string;
}

function SelectedValue<T>(props: SelectedValueSelectedValueProps<T>) {
  const text = props.data.find((item) => {
    return item.id === props.selectedId;
  })?.label;

  return (
    <div className='py-1'>{text ? <Word>{text}</Word> : <Muted className='font-normal'>{props.placeholder || 'Select...'}</Muted>}</div>
  );
}
