import { Input } from '@/components/ui/input';
import { InputProps } from '@/components/ui/input/helpers';
import { cn } from '@/lib/utils';
import { FormLabel } from '../label';

interface TextInputProps {
  name?: string;
  id?: string;
  containerClassName?: string;
  labelClassName?: string;
  inputClassname?: string;
}

export function TextInput({
  name,
  id,
  containerClassName,
  labelClassName,
  inputClassname,
  ...props
}: TextInputProps & InputProps): JSX.Element {
  return (
    <div className={cn('flex items-center w-full gap-4', containerClassName)}>
      {name && name.length && <FormLabel name={name} id={id} labelClassName={labelClassName} />}
      <Input className={cn('w-full', inputClassname)} id={id || name} {...props} />
    </div>
  );
}
