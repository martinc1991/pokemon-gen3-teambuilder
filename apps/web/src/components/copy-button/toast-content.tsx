import { Button } from 'ui';

export default function CopyButtonToastContent(): JSX.Element {
  return (
    <Button className='px-0' size='sm' variant='link'>
      <a href='https://play.pokemonshowdown.com/teambuilder' rel='noopener noreferrer' target='_blank'>
        Go to Showdown Teambuilder
      </a>
    </Button>
  );
}
