import { Input } from '@/components/ui/input';
import { InputProps } from '@/components/ui/input/helpers';
import { cn } from '@/lib/utils';
import { FormLabel } from '../label';

interface NumberInputProps {
  name: string;
  id?: string;
  className?: string;
  labelClassName?: string;
  onChange?: (value: number) => void;
}

export function NumberInput({
  name,
  id,
  className,
  labelClassName,
  onChange,
  ...props
}: NumberInputProps & Omit<InputProps, 'onChange' | 'type'>): JSX.Element {
  return (
    <div className={cn('flex items-center w-full gap-4', className)}>
      <FormLabel name={name} id={id} labelClassName={labelClassName} />
      <Input
        id={id || name}
        {...props}
        type='number'
        onChange={(e) => {
          onChange && onChange(parseInt(e.target.value) as number);
        }}
      />
    </div>
  );
}
