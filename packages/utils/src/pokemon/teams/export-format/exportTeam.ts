import { ExportSlot, type JSONSlot } from 'contract';
import { exportSlot } from './exportSlot';

/**
 * Transforms a team **from JSON to export** format.
 */
export function exportTeam(team: JSONSlot[]): ExportSlot {
  // TODO: add security guard clauses
  let output = '';
  for (const set of team) {
    output += `${exportSlot(set)}\n`;
  }
  return output;
}
