import { Checkbox } from '@/components/ui/checkbox';
import { cn } from '@/lib/utils';
import { CheckboxProps } from '@radix-ui/react-checkbox';
import { FormLabel } from '../label';

interface CheckboxFieldProps {
  name: string;
  id?: string;
  containerClassName?: string;
  labelClassName?: string;
  inputClassname?: string;
}

export function CheckboxInput({
  name,
  id,
  containerClassName,
  labelClassName,
  inputClassname,
  ...props
}: CheckboxFieldProps & CheckboxProps): JSX.Element {
  return (
    <div className={cn('flex items-center w-full gap-4', containerClassName)}>
      <FormLabel name={name} id={id} labelClassName={labelClassName} />
      <Checkbox className={inputClassname} id={id || name} {...props} />
    </div>
  );
}
