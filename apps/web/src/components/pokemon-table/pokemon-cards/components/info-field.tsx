import { Typography } from 'ui';

interface CardInfoFieldProps {
  fieldName: string;
  children: React.ReactNode;
}

export default function CardInfoField({ fieldName, children }: CardInfoFieldProps): JSX.Element {
  return (
    <div className='flex gap-5'>
      <div className='flex justify-between flex-1 gap-1'>
        <Typography.Muted>{`${fieldName}:`}</Typography.Muted>
        <Typography.Small>{children}</Typography.Small>
      </div>
    </div>
  );
}
