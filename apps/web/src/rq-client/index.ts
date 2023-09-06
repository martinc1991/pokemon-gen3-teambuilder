import { initQueryClient } from '@ts-rest/react-query';
import { mainContract } from 'contract';

export const client = initQueryClient(mainContract, {
  baseUrl: 'http://localhost:3333',
  baseHeaders: {},
});
