import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { CheckboxProps } from '@radix-ui/react-checkbox';
import { FormLabel } from '../label';

interface CheckboxFieldProps {
  name: string;
  id?: string;
  className?: string;
  labelClassName?: string;
}

export function CheckboxInput({ name, id, className, labelClassName, ...props }: CheckboxFieldProps & CheckboxProps): JSX.Element {
  return (
    <div className={cn('flex items-center w-full gap-4', className)}>
      <FormLabel name={name} id={id} labelClassName={labelClassName} />
      <Checkbox id={id || name} {...props} />
    </div>
  );
}
