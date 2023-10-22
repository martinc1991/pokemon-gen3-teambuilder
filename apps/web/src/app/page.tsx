'use client';

import PageHeader from '@components/page-header';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Pokemon Gen 3 TeamBuilder',
};

export default function Builder(): JSX.Element {
  return <PageHeader description='This is the home: a place where you can chill and relax before anything.' title='Home' />;
}
