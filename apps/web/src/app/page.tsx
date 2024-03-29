'use client';

import PageHeader from '@components/page-header';
import { PageContent } from '@components/pages/page-content';
import { SampleTeams } from '@components/sample-teams';
import { Typography } from 'ui';

export default function Home(): JSX.Element {
  return (
    <>
      <PageHeader description='This is the home: a place where you can chill and relax before anything.' title='Home' />
      <PageContent>
        <Typography.H3>Sample Teams</Typography.H3>
        <SampleTeams />
      </PageContent>
    </>
  );
}
