import LoadingState from '@components/loading-state';
import TeamCard from '@components/teams/card';
import { client } from '@rq-client/index';
import { Typography } from 'ui';

export function SampleTeams(): JSX.Element {
  const { data, isLoading, isError, isFetching } = client.teams.getSampleTeams.useQuery(['get-sample-teams'], {});

  if (isLoading || isFetching) {
    return <LoadingState />;
  }
  if (isError) {
    return <Typography.P>error...</Typography.P>;
  }

  return (
    <div className='flex flex-wrap justify-center gap-6'>
      {data.body.length > 0 &&
        data.body.map((team, i) => {
          return <TeamCard key={`team-${i}`} team={team} />;
        })}
    </div>
  );
}
