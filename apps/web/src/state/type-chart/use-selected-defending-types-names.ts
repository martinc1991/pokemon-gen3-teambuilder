import { TypeNames } from 'contract';
import { useTypeChartStore } from '.';

export function useSelectedDefendingTypesNames(): TypeNames[] {
  const { defendingTypes } = useTypeChartStore((state) => state);
  return defendingTypes.map((t) => t.name);
}
