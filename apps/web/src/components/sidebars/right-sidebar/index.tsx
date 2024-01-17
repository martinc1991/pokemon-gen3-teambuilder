import { Typography } from 'ui';
import BasicSidebar from '../basic-sidebar';
import RightSidebarContent from './content';

export default function RightSidebar(): JSX.Element {
  return (
    <BasicSidebar side='right'>
      <Typography.P>Team</Typography.P>
      <RightSidebarContent />
    </BasicSidebar>
  );
}
