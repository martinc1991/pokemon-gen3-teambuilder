import CopyButton from '@components/copy-button';
import { RecoverTeamButton } from '@components/recover-team-button';
import withTeamStore, { WithTeamStoreProps } from '@state/hoc/with-store';
import { TeamWithFilledSlots } from 'contract';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, PokemonAvatar, Typography } from 'ui';

interface TeamCardProps extends WithTeamStoreProps {
  team: TeamWithFilledSlots;
}

function TeamCard({ team }: TeamCardProps): JSX.Element {
  return (
    <Card className='w-[450px]'>
      <CardHeader>
        <CardTitle>{team.name}</CardTitle>
        <CardDescription>{team.description}</CardDescription>
      </CardHeader>
      <CardContent className='flex gap-1'>
        {team.slots.map((slot) => {
          return <PokemonAvatar key={slot.id} iconUrl={slot.pokemon.icon} />;
        })}
      </CardContent>
      <CardFooter className='flex justify-between h-14'>
        <div className='flex gap-2'>
          <Typography.Muted>By:</Typography.Muted>
          <Typography.Small>{team.userName}</Typography.Small>
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
