import LoadingState from '@components/loading-state';
import { TypesFilter } from '@components/pokemon-table/filters/types-filter';
import { client } from '@rq-client/index';
import { useTeamStore } from '@state/team';
import { useTypeChartStore } from '@state/type-chart';
import { MAX_TEAM_MEMBERS, PokemonWithAbilities, Type } from 'contract';
import { ComboboxItem, PokemonAvatar, Typography } from 'ui';
import { capitalize } from 'utils';
import { getTypeCombinationDefensiveDamageInfo } from '../helpers';
import { Typeinfo } from './type-info';

export function DefendingFilters({ types }: { types: Type[] }): JSX.Element {
  const { defendingTypes, addDefendingType, clearDefendingTypes, removeDefendingType } = useTypeChartStore((state) => state);

  function handleTypeChange(_: ComboboxItem<Type>[], type: ComboboxItem<Type>): void {
    addDefendingType(type.payload);
  }

  function handleTypeRemove(_: ComboboxItem<Type>[], type: ComboboxItem<Type>): void {
    removeDefendingType(type.payload);
  }
  function handleTypeClear(): void {
    clearDefendingTypes();
  }

  return (
    <div className='flex flex-col flex-1 gap-4'>
      <Typography.H4>Defending</Typography.H4>
      <TypesFilter
        types={types.filter((t) => t.name !== 'empty')}
        onClear={handleTypeClear}
        onChange={handleTypeChange}
        onRemove={handleTypeRemove}
      />
      {defendingTypes.length ? (
        <>
          <DefendingTypeInfo typeOne={defendingTypes[0]} typeTwo={defendingTypes[1]} />
          <ExamplePokemonByType types={defendingTypes} />
        </>
      ) : (
        <Typography.Muted>Select one or two types</Typography.Muted>
      )}
    </div>
  );
}

interface AttackingTypeInfoProps {
  typeOne: Type;
  typeTwo?: Type;
}

function DefendingTypeInfo({ typeOne, typeTwo }: AttackingTypeInfoProps): JSX.Element {
  const { noDamageFrom, cuadrupleDamageFrom, doubleDamageFrom, quarterDamageFrom, halfDamageFrom } = getTypeCombinationDefensiveDamageInfo(
    typeOne,
    typeTwo,
  );
  return (
    <div className='flex flex-col gap-2'>
      <Typeinfo title='4x damage from' types={cuadrupleDamageFrom} />
      <Typeinfo title='2x damage from' types={doubleDamageFrom} />
      <Typeinfo title='1/2 damage from' types={halfDamageFrom} />
      <Typeinfo title='1/4 damage from' types={quarterDamageFrom} />
      <Typeinfo title='No damage from' types={noDamageFrom} />
    </div>
  );
}

interface ExamplePokemonByTypeProps extends ExamplePokemonProps {}

function ExamplePokemonByType({ types }: ExamplePokemonByTypeProps): JSX.Element {
  return (
    <div className='flex flex-col'>
      <Typography.Small>Pokemon with this type combination:</Typography.Small>
      <ExamplePokemon types={types} />
    </div>
  );
}

interface ExamplePokemonProps {
  types: Type[];
}

function ExamplePokemon({ types }: ExamplePokemonProps): JSX.Element {
  const [typeOne, typeTwo] = types;
  const [addPokemonDisabled, addPokemon] = useTeamStore((state) => [state.slots.length >= MAX_TEAM_MEMBERS, state.addSlot]);

  const queryKey = `get-pokemon-with-types-${typeOne.name || ''}-${typeTwo?.name || ''}`;
  const { data, isError, isLoading } = client.pokemon.getAll.useQuery([queryKey], {
    query: {
      typeOne: typeOne.name || undefined,
      typeTwo: typeTwo?.name || undefined,
      take: 100,
    },
  });

  function handleAdd(pokemon: PokemonWithAbilities): void {
    if (!addPokemonDisabled)
      addPokemon({
        abilityName: pokemon.abilities[0].name,
        gender: pokemon.genders[0],
        nationalPokedexNumber: pokemon.nationalPokedexNumber,
        species: pokemon.name,
      });
  }

  if (isLoading) {
    return <LoadingState />;
  }
  if (isError) {
    return <Typography.P>error...</Typography.P>;
  }

  return (
    <>
      {data.body.length > 0 ? (
        <div className='flex flex-wrap'>
          {data.body.map((pkmn) => {
            return (
              <PokemonAvatar
                iconUrl={pkmn.icon}
                name={capitalize(pkmn.name)}
                key={`pkmn-by-type-${pkmn.id}`}
                onClick={() => handleAdd(pkmn)}
              />
            );
          })}
        </div>
      ) : (
        <Typography.Small>-</Typography.Small>
      )}
    </>
  );
}
