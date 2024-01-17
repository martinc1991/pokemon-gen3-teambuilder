import clsx from 'clsx';

interface PageContentProps {
  children: React.ReactNode;
  className?: string;
}

export function PageContent({ children, className = '' }: PageContentProps): JSX.Element {
  return <div className={clsx('flex flex-col w-full gap-4 items-center pb-8', className)}>{children}</div>;
}
