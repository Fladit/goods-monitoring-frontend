import type { ValueOf } from '../utils/ValueOf';

export const DIMENSIONS = {
  WEIGHT: 'weight',
  volume: 'volume',
} as const;

export type TDimensions = ValueOf<typeof DIMENSIONS>;
