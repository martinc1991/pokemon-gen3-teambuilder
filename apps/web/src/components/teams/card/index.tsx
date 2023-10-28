import CopyButton from '@components/copy-button';
import { RecoverTeamButton } from '@components/recover-team-button';
import withTeamStore, { WithTeamStoreProps } from '@state/hoc/with-store';
import { FilledSlot } from '@state/team/helpers';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, PokemonIcon, Typography } from 'ui';

export interface CardTeam {
  user: string;
  name: string;
  description: string;
  slots: FilledSlot[];
}

interface TeamCardProps extends WithTeamStoreProps {
  team: CardTeam;
}

function TeamCard({ team }: TeamCardProps): JSX.Element {
  return (
    <Card className='w-[450px]'>
      <CardHeader>
        <CardTitle>{team.name}</CardTitle>
        <CardDescription>{team.description}</CardDescription>
      </CardHeader>
      <CardContent className='flex gap-4'>
        {team.slots.map((slot) => {
          return <PokemonIcon key={slot.id} iconUrl={slot.pokemon.icon} />;
        })}
      </CardContent>
      <CardFooter className='flex justify-between h-14'>
        <div className='flex gap-2'>
          <Typography.Muted>By:</Typography.Muted>
          <Typography.Small>{team.user}</Typography.Small>
        </div>
        <div className='flex gap-4 '>
          <RecoverTeamButton team={team} />
          <CopyButton slots={team.slots} teamName={team.name} />
        </div>
      </CardFooter>
    </Card>
  );
}

export default withTeamStore(TeamCard);
