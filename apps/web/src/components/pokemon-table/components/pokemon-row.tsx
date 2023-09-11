import type { IPokemonGetAllResponseElement } from 'contract';
import { TableCell, TableRow, Typography } from 'ui';

interface PokemonRowProps {
  pokemon: IPokemonGetAllResponseElement;
}

export function PokemonRow({ pokemon }: PokemonRowProps): JSX.Element {
  const { nationalPokedexNumber, name, typeOneName, typeTwoName, height, weight } = pokemon;
  return (
    <TableRow>
      <TableCell className='text-center'>
        <Typography.P>{nationalPokedexNumber}</Typography.P>
      </TableCell>
      <TableCell className='text-center'>
        <Typography.P>{name}</Typography.P>
      </TableCell>
      <TableCell className='text-center'>
        <Typography.P>{typeOneName}</Typography.P>
      </TableCell>
      <TableCell className='text-center'>
        <Typography.P>{typeTwoName === 'empty' ? '-' : typeTwoName}</Typography.P>
      </TableCell>
      <TableCell className='text-center'>
        <Typography.P>{`${height} cm`}</Typography.P>
      </TableCell>
      <TableCell className='text-center'>
        <Typography.P>{`${weight} kg`}</Typography.P>
      </TableCell>
      <TableCell className='text-center'>
        <Typography.P>Male</Typography.P>
      </TableCell>
    </TableRow>
  );
}
