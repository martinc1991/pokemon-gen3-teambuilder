import { TableHead, TableHeader, TableRow } from 'ui';

export default function PokemonTableHeader(): JSX.Element {
  return (
    <TableHeader>
      <TableRow>
        <TableHead className='text-center'>#</TableHead>
        <TableHead className='text-center'>Name</TableHead>
        <TableHead className='text-center'>Type 1</TableHead>
        <TableHead className='text-center'>Type 2</TableHead>
        <TableHead className='text-center'>Height</TableHead>
        <TableHead className='text-center'>Weight</TableHead>
        <TableHead className='text-center'>Gender</TableHead>
      </TableRow>
    </TableHeader>
  );
}
