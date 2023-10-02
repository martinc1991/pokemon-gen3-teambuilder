import { InputProps } from '@/components/ui/input/helpers';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface TextInputProps {
  name: string;
  id?: string;
  labelClassName?: string;
}

export function FormLabel({ name, id, labelClassName }: TextInputProps & InputProps): JSX.Element {
  return (
    <Label className={cn('min-w-[70px] text-right capitalize', labelClassName)} htmlFor={id || name}>
      {name}
    </Label>
  );
}
