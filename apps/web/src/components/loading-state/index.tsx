import clsx from 'clsx';
import { SubstitutePlaceholder } from 'ui';

interface LoadingStateProps {
  containerClassName?: string;
  height?: number;
}

export default function LoadingState({ containerClassName = '', height = 40 }: LoadingStateProps): JSX.Element {
  return (
    <div className={clsx('flex items-center justify-center flex-1 w-full', containerClassName)}>
      <SubstitutePlaceholder height={height} />
    </div>
  );
}
