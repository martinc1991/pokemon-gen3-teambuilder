import { Typography } from 'ui';
import BasicSidebar from '../basic-sidebar';

const slots = [1, 2, 3, 4, 5, 6];

export default function RightSidebar(): JSX.Element {
  return (
    <BasicSidebar side='right'>
      <Typography.P>Team</Typography.P>
      {slots.map((slot) => {
        return <Typography.Small key={slot}>{`Slot ${slot}`}</Typography.Small>;
      })}
    </BasicSidebar>
  );
}
