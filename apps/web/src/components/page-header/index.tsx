import { Typography } from 'ui';

export const PAGE_HEADER_HEIGHT = 120;

interface PageHeaderProps {
  title: string;
  description?: string;
}

export default function PageHeader({ title, description }: PageHeaderProps): JSX.Element {
  return (
    <div className='flex flex-col items-center' style={{ height: PAGE_HEADER_HEIGHT }}>
      <Typography.H1>{title}</Typography.H1>
      {description ? <Typography.P>{description}</Typography.P> : null}
    </div>
  );
}
