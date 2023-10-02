import { Input } from '@/components/ui/input';
import { InputProps } from '@/components/ui/input/helpers';
import { cn } from '@/lib/utils';
import { FormLabel } from '../label';

interface TextInputProps {
  name: string;
  id?: string;
  className?: string;
  labelClassName?: string;
}

export function TextInput({ name, id, className, labelClassName, ...props }: TextInputProps & InputProps): JSX.Element {
  return (
    <div className={cn('flex items-center w-full gap-4', className)}>
      <FormLabel name={name} id={id} labelClassName={labelClassName} />
      <Input id={id || name} {...props} />
    </div>
  );
}
