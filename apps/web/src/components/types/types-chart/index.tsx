import LoadingState from '@components/loading-state';
import { client } from '@rq-client/index';
import { Typography } from 'ui';
import { Filters } from './filters';
import { TypeChartTable } from './table';
import { useWindowSize } from 'usehooks-ts';
import clsx from 'clsx';

export function TypesChart(): JSX.Element {
  const { width } = useWindowSize();
  const biggerThan1600 = width > 1600;

  const { data, isError, isLoading } = client.types.getAll.useQuery(['get-all-types']);

  if (isLoading) {
    return <LoadingState />;
  }
  if (isError) {
    return <Typography.P>error...</Typography.P>;
  }

  return (
    <div className={clsx('flex w-full justify-center', biggerThan1600 ? 'flex-row' : 'flex-col items-center')}>
      <Filters types={data.body} />
      <TypeChartTable types={data.body} />
    </div>
  );
}
