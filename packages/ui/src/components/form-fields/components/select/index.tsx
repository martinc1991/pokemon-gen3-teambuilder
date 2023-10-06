import { Combobox } from '@/components/ui/combobox';
import { ComboboxProps } from '@/components/ui/combobox/helpers/types';
import { cn } from '@/lib/utils';
import { FormLabel } from '../label';

interface SelectFieldProps {
  name: string;
  id?: string;
  containerClassName?: string;
  inputClassname?: string;
  labelClassName?: string;
}

export function SelectInput<T>({
  name,
  id,
  containerClassName,
  labelClassName,
  inputClassname,
  ...props
}: SelectFieldProps & ComboboxProps<T>): JSX.Element {
  return (
    <div className={cn('flex items-center w-full gap-4', containerClassName)}>
      <FormLabel name={name} id={id} labelClassName={labelClassName} />
      <Combobox className={cn('w-full', inputClassname)} {...props} />
    </div>
  );
}
